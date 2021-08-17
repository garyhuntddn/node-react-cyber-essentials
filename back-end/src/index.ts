import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

type Group = {
  users: Array<string>;
  answers: Array<unknown>;
};

const messagesPerGroup: { [group: string]: Group } = {};

/*
server.get( "/", ( req: any, res: any ) => {
  const request = req as Request;
  const response = res as Response;

  console.log( "got a request for /" );
} );
*/

server.get("/answers", (req: any, res: any) => {
  const request = req as Request;
  const groupName = req.query.g;
  console.log(`group ${groupName}`);
  const group = messagesPerGroup[groupName] || { users: [], answers: [] };
  console.log(`sending ${group.answers.length}`);
  res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(group.answers));
});

server.post("/messages", (req: any, res: any) => {
  const request = req as Request;
  const json = request.body;
  const groupName = req.query.g;
  console.log(`group ${groupName}`);

  const userName = req.header("X-UserName") as string;
  console.log(`user ${userName}`);

  const group = messagesPerGroup[groupName] || { users: [userName], answers: [] };
  messagesPerGroup[groupName] = group;
  group.answers.push(json);

  console.log(`message count is now ${group.answers.length}`);

  res.send("done\r\n");
});

server.get("/dump", (req: any, res: any) => {
  const request = req as Request;

  const token = req.header("X-Token") as string;
  console.log(`token: ${token}`);

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
    res.send(JSON.stringify(messagesPerGroup));
  }
});

server.post("/users", (req: any, res: any) => {
  const request = req as Request;
  const json = request.body as any as { name: string };
  const groupName = req.query.g;
  console.log(`group ${groupName}`);

  const userName = req.header("X-UserName") as string;
  console.log(`user ${userName}`);

  const group = messagesPerGroup[groupName];
  if (!group) {
    throw new Error("Nope!");
  }

  if (userName !== group.users[0]) {
    throw new Error("Nope!");
  }

  group.users.push(json.name);

  console.log(`user count is now ${group.users.length}`);

  res.send("done\r\n");
});

server.delete("/users", (req: any, res: any) => {
  const request = req as Request;
  const json = request.body as any as { name: string };
  const groupName = req.query.g;
  console.log(`group ${groupName}`);

  const userName = req.header("X-UserName") as string;
  console.log(`user ${userName}`);

  const group = messagesPerGroup[groupName];
  if (!group) {
    console.log("group does not exist");
    throw new Error("Nope!");
  }

  if (userName !== group.users[0]) {
    console.log("user is not owner of group");
    throw new Error("Nope!");
  }

  const index = group.users.findIndex(m => m === json.name);
  if (index < 0) {
    console.log("user is not in group");
    throw new Error("Nope!");
  }

  group.users.splice(index, 1);

  console.log(`user count is now ${group.users.length}`);

  res.send("done\r\n");
});

const port = 2999;
console.log(`starting web server on ${port}`);

server.listen(port, "localhost");
