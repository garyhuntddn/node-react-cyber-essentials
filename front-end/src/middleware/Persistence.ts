import { Model } from "../models/Model";

export const persistanceMiddleware = ( store: any ) => ( next: any ) => async ( action: any ) => {
  const model=store.getState()as Model;
  const url = `http://localhost:2999/messages?g=${model.group}`;
  console.log(`store message for group ${model.group}`);

  await fetch( url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( action )
  } );

  // log a fancy message and action
  console.log( action );

  // continue to the next action
  return next( action );
};