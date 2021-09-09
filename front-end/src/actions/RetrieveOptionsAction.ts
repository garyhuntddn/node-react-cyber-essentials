import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Group, Model } from "../models/Model";
import { SetGroups } from "./SetGroupsAction";

export const RetrieveOptionsMessage = "RetrieveOptionsAction";

export const RetrieveOptions = (): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return async ( dispatch: Dispatch, getState: () => Model ) => {
    const model = getState();

    const url = `http://localhost:2999/user`;

    const response = await fetch( url, { headers: { "Accept": "application/json", "X-UserName": model.userName, "X-Password": model.password } } );
    const json = await response.json() as Array<Group>;

    dispatch( SetGroups( json ) );
  }
};

export type RetrieveOptionsAction = ReturnType<typeof RetrieveOptions>;