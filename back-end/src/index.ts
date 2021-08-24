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

type User = {
  name: string;
  password: string;
};

type Group = {
  users: Array<string>;
  answers: Array<unknown>;
};

const users: Array<User> = [];
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

  const userName = req.header( "X-UserName" ) as string;
  logger.debug( `user ${ userName }` );

  const group = messagesPerGroup[ groupName ] || { users: [ userName ], answers: [] };
  messagesPerGroup[ groupName ] = group;
  group.answers.push( json );

  logger.debug( `message count is now ${ group.answers.length }` );

  res.send( "done\r\n" );
} );

server.get( "/dump", ( req: any, res: any ) => {
  const request = req as Request;

  const token = req.header( "X-Token" ) as string;
  logger.debug( `token: ${ token }` );

  if ( token !== "uhfierhgiu" ) {
    res.statusCode = 404;
    res.send( `<!DOCTYPE html>
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
    res.set( "Content-Type", "application/json; charset=utf-8" );
    res.send( JSON.stringify( { messagesPerGroup, users } ) );
  }
} );

server.post( "/groupUsers", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body as any as { name: string };
  const groupName = req.query.g;
  logger.debug( `group ${ groupName }` );

  const userName = req.header( "X-UserName" ) as string;
  logger.debug( `user ${ userName }` );

  const group = messagesPerGroup[ groupName ];
  if ( !group ) {
    throw new Error( "Nope!" );
  }

  if ( userName !== group.users[ 0 ] ) {
    throw new Error( "Nope!" );
  }

  group.users.push( json.name );

  logger.debug( `user count is now ${ group.users.length }` );

  res.send( "done\r\n" );
} );

server.delete( "/groupUsers", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body as any as { name: string };
  const groupName = req.query.g;
  logger.debug( `group ${ groupName }` );

  const userName = req.header( "X-UserName" ) as string;
  logger.debug( `user ${ userName }` );

  const group = messagesPerGroup[ groupName ];
  if ( !group ) {
    logger.debug( "group does not exist" );
    throw new Error( "Nope!" );
  }

  if ( userName !== group.users[ 0 ] ) {
    logger.debug( "user is not owner of group" );
    throw new Error( "Nope!" );
  }

  const index = group.users.findIndex( m => m === json.name );
  if ( index < 0 ) {
    logger.debug( "user is not in group" );
    throw new Error( "Nope!" );
  }

  group.users.splice( index, 1 );

  logger.debug( `user count is now ${ group.users.length }` );

  res.send( "done\r\n" );
} );

server.post( "/users", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body as any as User;

  users.push( json );

  logger.debug( `user count is now ${ users.length }` );

  res.send( "done\r\n" );
} );

server.delete( "/users", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body as any as User;

  const userName = req.header( "X-UserName" ) as string;
  logger.debug( `user ${ userName }` );

  if ( userName !== json.name ) {
    logger.debug( "user attempting to delete someone else" );
    throw new Error( "Nope!" );
  }

  const index = users.findIndex( m => m.name === json.name );
  if ( index < 0 ) {
    logger.debug( "user is not in list" );
    throw new Error( "Nope!" );
  }

  users.splice( index, 1 );

  logger.debug( `user count is now ${ users.length }` );

  res.send( "done\r\n" );
} );

const port = 2999;
logger.info( `starting web server on ${ port }` );

server.listen( port, "localhost" );
