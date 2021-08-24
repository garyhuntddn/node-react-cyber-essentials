import { Action, Dispatch } from "redux";
import { Model } from "../models/Model";
import { SignInResult } from "./SignInResultAction";
import { ThunkAction } from "redux-thunk";
import { RootStateOrAny } from "react-redux";

export const SignInMessage = "SignInAction";

export const SignIn = (): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return async ( dispatch: Dispatch, getState: () => Model ) => {
    const model = getState();

    const url = `http://localhost:2999/authenticate`;
    console.log( `authenticating user ${ model.userName } with password ${ model.password }` );

    try {
      const response = await fetch( url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-UserName": model.userName,
          "X-Password": model.password,
        }
      } );

      const text = await response.text();

      console.log( `response from authentication: ${ text }` );

      dispatch( SignInResult( text === "ok" ) );
    }
    catch ( e ) {
      console.log( "error occurred authenticating" );
      dispatch( SignInResult( false ) );
    }
  };
}

export type SignInAction = ReturnType<typeof SignIn>;
