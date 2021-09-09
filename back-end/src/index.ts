import express from "express";
import expressPinoLogger from "express-pino-logger";
import cors from "cors";
import pino from "pino";
import { createHash } from "crypto";
import { v4 } from "uuid";
import { MongoClient } from "mongodb";

const logger = pino({
  name: "node-react-cyber-essentials",
  prettyPrint: true,
  level: "debug",
});

const server = express();
server.use(express.json());
server.use(cors());
server.use(expressPinoLogger({ logger: logger }));

type User = {
  name: string;
  salt: string;
  passwordHash: string;
};

type Group = {
  users: Array<string>;
  answers: Array<unknown>;
};

const key = "fdsfsfsadfdsa";

// TODO: move these to mongo
const messagesPerGroup: { [group: string]: Group } = {};

const connectToMongo = async () => {
  logger.debug("connecting to mongo");
  const client = new MongoClient("mongodb://localhost");
  const cn = await client.connect();
  logger.debug("connecting to database");
  const db = cn.db("node-react-cyber-essentials");
  return db;
};

const isUserAndPasswordValid = async (userName: string, password: string): Promise<boolean> => {
  const lowerCaseName = userName.toLocaleLowerCase();

  const db = await connectToMongo();
  const users = db.collection("users");

  const matchingUsers = await users.find({ lowerCaseName }).toArray();
  if (matchingUsers.length === 0) {
    logger.debug(`cannot find user with name: ${userName}`);
    return false;
  }

  if (matchingUsers.length !== 1) {
    logger.debug(`multiple users with name: ${userName}`);
    return false;
  }

  const user = matchingUsers[0];
  logger.debug(`testing password for user ${userName} and salt ${user.salt}`);
  const sha256 = createHash("sha256");
  const passwordHash = sha256.update(key).update(user.salt).update(password).digest("base64");

  const ok = user.passwordHash === passwordHash;
  if (!ok) logger.debug(`password is not ${password} for user ${userName}`);

  return ok;
};

const authenticate = async (req: { header: (name: string) => any }): Promise<boolean> => {
  const userName = req.header("X-UserName") as string;
  const password = req.header("X-Password") as string;

  logger.debug({ userName, password });

  if (await isUserAndPasswordValid(userName, password)) return true;

  logger.debug(`failed to authenticate ${userName}`);
  throw new Error("Not authenticated");
};

server.get("/answers", async (req: any, res: any) => {
  await authenticate(req);

  const groupName = req.query.g;
  logger.debug(`group ${groupName}`);
  const group = messagesPerGroup[groupName] || { users: [], answers: [] };
  logger.debug(`sending ${group.answers.length}`);
  res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(group.answers));
});

server.post("/messages", async (req: any, res: any) => {
  const request = req as Request;
  const json = request.body;
  const groupName = req.query.g;
  logger.debug(`group ${groupName}`);

  await authenticate(req);

  const userName = req.header("X-UserName") as string;
  logger.debug(`user ${userName}`);

  const group = messagesPerGroup[groupName] || { users: [userName], answers: [] };
  messagesPerGroup[groupName] = group;
  group.answers.push(json);

  logger.debug(`message count is now ${group.answers.length}`);

  res.send("done\r\n");
});

server.get("/dump", (req: any, res: any) => {
  const token = req.header("X-Token") as string;
  logger.debug(`token: ${token}`);

  if (token !== "uhfierhgiu") {
    res.statusCode = 404;
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>
    
    <body>
      <pre>Cannot GET /dump2</pre>
    </body>
    
    </html>`);
  } else {
    res.set("Content-Type", "application/json; charset=utf-8");
    res.send(JSON.stringify({ messagesPerGroup }));
  }
});

server.post("/groups", async (req: any, res: any) => {
  const request = req as Request;
  const json = request.body as any as { name: string; users: Array<string> };
  logger.debug(`group ${json.name}`);

  await authenticate(req);

  const userName = req.header("X-UserName") as string;
  logger.debug(`user ${userName}`);

  const db = await connectToMongo();
  const groups = db.collection("groups");

  const filter = { name: json.name };
  const group = await groups.findOne(filter);

  if (group) {
    logger.debug("updating existing group");

    // check the user is the owner of the group
    if (userName !== group.users[0]) {
      throw new Error("Nope!");
    }

    // update the existing group
    await groups.updateOne(filter, { $set: { ...json } });
  } else {
    logger.debug("inserting new group");

    // add a new group as there isn't one with this name
    await groups.insertOne(json);
  }

  res.send("done\r\n");
});

server.get("/user", async (req: any, res: any) => {
  await authenticate(req);

  const db = await connectToMongo();
  const groups = db.collection("groups");
  const allGroups = await groups.find().toArray();

  const userName = req.header("X-UserName") as string;

  logger.debug(`searching for groups for username: ${userName}`);

  const matchingGroups = allGroups.filter(g => {
    if (g.users.indexOf(userName) > -1) return true;
    return false;
  });

  const expandedGroups = matchingGroups.map(g => ({ name: g.name, isOwner: g.users[0] === userName, users: g.users }));

  logger.debug({ groups: JSON.stringify(expandedGroups) });

  res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(expandedGroups));
});

server.post("/users", async (req: any, res: any) => {
  const request = req as Request;
  const json = request.body as any;

  const salt = v4();

  const sha256 = createHash("sha256");
  const password = json.password;
  const passwordHash = sha256.update(key).update(salt).update(password).digest("base64");
  delete json.password;
  json.passwordHash = passwordHash;
  json.salt = salt;
  json.lowerCaseName = json.name.toLocaleLowerCase();

  logger.debug("creating user");
  logger.debug({ body: JSON.stringify(json), username: json.name, password, key, salt, passwordHash });

  const db = await connectToMongo();
  const users = db.collection("users");

  await users.insertOne(json);

  logger.debug(`user count is now ${await users.countDocuments()}`);

  res.send("done\r\n");
});

server.delete("/users", async (req: any, res: any) => {
  const request = req as Request;
  const json = request.body as any as User;

  await authenticate(req);

  const userName = req.header("X-UserName") as string;
  logger.debug(`user ${userName}`);

  if (userName !== json.name) {
    logger.debug("user attempting to delete someone else");
    throw new Error("Nope!");
  }

  const db = await connectToMongo();
  const users = db.collection("users");

  await users.deleteOne({ lowerCaseName: json.name.toLocaleLowerCase() });

  logger.debug(`user count is now ${await users.countDocuments()}`);

  res.send("done\r\n");
});

server.post("/authenticate", async (req: any, res: any) => {
  res.set("Content-Type", "text/plain; charset=utf-8");
  try {
    logger.debug(`authenticating ${req.header("X-UserName")}`);
    await authenticate(req);

    logger.debug(`authenticating ${req.header("X-UserName")} is good`);
    res.send("ok");
  } catch (e) {
    logger.debug(`authenticating ${req.header("X-UserName")} is bad ${JSON.stringify(e)}`);
    res.send("failed");
  }
});

const port = 2999;
logger.info(`starting web server on ${port}`);

server.listen(port, "localhost");
