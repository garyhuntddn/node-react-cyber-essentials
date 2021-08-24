import "@testing-library/jest-dom";
import { MongoClient } from "mongodb";

const connectToMongo = async () => {
  const client = new MongoClient( "mongodb://localhost" );
  const cn = await client.connect();
  const db = cn.db( "node-react-cyber-essentials" );
  return db;
}

describe( "mongo tests", () => {
  it( "should connect to mongo", async () => {
    const test = async () => {
      const db = await connectToMongo();
      await db.command( { ping: 1 } );
      return "ok";
    };

    expect( await test() )
      .toEqual( "ok" );
  } );

  it( "can add data to mongo", async () => {
    const test = async () => {
      const db = await connectToMongo();
      const users = db.collection( "users" );
      await users.insertOne( { "username": "jax", "password": "123 " } );
      return "ok";
    };

    expect( await test() )
      .toEqual( "ok" );
  } );

  it( "can read some data from mongo for a newly created row", async () => {
    const test = async () => {
      const db = await connectToMongo();
      const users = db.collection( "users" );
      await users.deleteMany( { "username": "jane" } );
      await users.insertOne( { "username": "jane", "password": "123 " } );
      const found = await users.find( { "username": "jane" } ).toArray();
      if ( found.length === 1 ) {
        console.log( found );
      }
      return found.length;
    };

    expect( await test() )
      .toEqual( 1 );
  } );

  it( "can read some data from mongo when the user does not exist", async () => {
    const test = async () => {
      const db = await connectToMongo();
      const users = db.collection( "users" );
      const found = await users.find( { "username": "bob" } ).toArray();
      return found.length;
    };

    expect( await test() )
      .toEqual( 0 );
  } );
} );