import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Model } from "../models/Model";
import { SignInResult } from "./SignInResultAction";

export const RetrieveAnswersMessage = "RetrieveAnswersAction";

export const RetrieveAnswers = (): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return async ( dispatch: Dispatch, getState: () => Model ) => {
    const model = getState();

    const url = `http://localhost:2999/answers?g=${ model.group }`;

    const response = await fetch( url, { headers: { "Accept": "application/json", "X-UserName": model.userName, "X-Password": model.password } } );
    const json = await response.json() as Array<Action>;

    for ( const action of json ) {
      dispatch( action );
    }

    dispatch( SignInResult( true ) );
  }
};

export type RetrieveAnswersAction = ReturnType<typeof RetrieveAnswers>;