"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
const messages = [];
/*
server.get( "/", ( req: any, res: any ) => {
  const request = req as Request;
  const response = res as Response;

  console.log( "got a request for /" );
} );
*/
server.get("/answers", (req, res) => {
    const request = req;
    const response = res;
    console.log("got a request for /answers");
    console.log(`sending ${messages.length}`);
    response.send(JSON.stringify(messages));
});
server.post("/messages", (req, res) => {
    const request = req;
    const response = res;
    console.log(response.body);
    messages.push(JSON.parse(response.body));
    console.log(`message count is now ${messages.length}`);
    response.send("done\r\n");
});
const port = 2999;
console.log(`starting web server on ${port}`);
server.listen(port, "localhost");
//# sourceMappingURL=index.js.map