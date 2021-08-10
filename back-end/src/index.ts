import express from "express";

const server = express();
server.use( express.json() );

const messages: Array<unknown> = [];

/*
server.get( "/", ( req: any, res: any ) => {
  const request = req as Request;
  const response = res as Response;

  console.log( "got a request for /" );
} );
*/

server.get( "/answers", ( req: any, res: any ) => {
  const request = req as Request;
  console.log( `sending ${ messages.length }` );
  res.set( "Content-Type", "application/json; charset=utf-8" );
  res.send( JSON.stringify( messages ) );
} );

server.post( "/messages", ( req: any, res: any ) => {
  const request = req as Request;
  const json = request.body;

  messages.push( json );

  console.log( `message count is now ${ messages.length }` )

  res.send( "done\r\n" )
} );

const port = 2999;
console.log( `starting web server on ${ port }` );

server.listen( port, "localhost" );
