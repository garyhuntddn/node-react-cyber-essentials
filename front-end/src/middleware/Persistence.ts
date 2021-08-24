import { Action } from "redux";
import { AddRowAnswerMessage } from "../actions/AddRowAnswerAction";
import { DeleteRowAnswerMessage } from "../actions/DeleteRowAnswerAction";
import { UpdateAnswerMessage } from "../actions/UpdateAnswerAction";
import { UpdateRowAnswerMessage } from "../actions/UpdateRowAnswerAction";
import { Model } from "../models/Model";

const actionsToPersist = [ AddRowAnswerMessage, DeleteRowAnswerMessage, UpdateAnswerMessage, UpdateRowAnswerMessage ];

export const persistanceMiddleware = ( store: any ) => ( next: any ) => async ( action: Action ) => {
  const model = store.getState() as Model;

  if ( !model.isAuthenticated ) return next( action );
  if ( actionsToPersist.indexOf( action.type ) < 0 ) return next( action );

  const url = `http://localhost:2999/messages?g=${ model.group }`;
  console.log( `store message for group ${ model.group }` );

  await fetch( url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "X-UserName": model.userName,
      "X-Password": model.password,
    },
    body: JSON.stringify( action ),
  } );

  // log a fancy message and action
  console.log( action );

  // continue to the next action
  return next( action );
};
