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
  const group = messagesPerGroup[groupName] || { users:[],answers:[]};
  console.log(`sending ${group.answers.length}`);
  res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(group.answers));
});

server.post("/messages", (req: any, res: any) => {
  const request = req as Request;
  const json = request.body;
  const groupName = req.query.g;
  console.log(`group ${groupName}`);
  const group = messagesPerGroup[groupName] || { users:[],answers:[]};
  messagesPerGroup[groupName] = group;
  group.answers.push(json);

  console.log(`message count is now ${group.answers.length}`);

  res.send("done\r\n");
});

const port = 2999;
console.log(`starting web server on ${port}`);

server.listen(port, "localhost");
