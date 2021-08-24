import express from "express";
import expressPinoLogger from "express-pino-logger";
import cors from "cors";
import pino from "pino";

const logger = pino( {
  name: "node-react-cyber-essentials",
  prettyPrint: true,
  level: "debug"
} );

const server = express();
server.use( express.json() );
server.use( cors() );
server.use( expressPinoLogger( { logger: logger } ) );

type Group = {
  users: Array<string>;
  answers: Array<unknown>;
};

const messagesPerGroup: { [ group: string ]: Group } = {};

server.get( "/answers", ( req: any, res: any ) => {
  const request = req as Request;
  const groupName = req.query.g;
  logger.debug( `group ${ groupName }` );
  const group = messagesPerGroup[ groupName ] || { users: [], answers: [] };
  logger.debug( `sending ${ group.answers.length }` );
  res.set( "Content-Type", "application/json; charset=utf-8" );
  res.send( JSON.stringify( group.answers ) );
} );

server.post( "/messages", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body;
  const groupName = req.query.g;
  logger.debug( `group ${ groupName }` );
  const group = messagesPerGroup[ groupName ] || { users: [], answers: [] };
  messagesPerGroup[ groupName ] = group;
  group.answers.push( json );

  logger.debug( `message count is now ${ group.answers.length }` );

  res.send( "done\r\n" );
} );

const port = 2999;
logger.info( `starting web server on ${ port }` );

server.listen( port, "localhost" );
