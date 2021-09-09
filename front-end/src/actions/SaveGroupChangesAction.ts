import { RootStateOrAny } from "react-redux";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Group, Model } from "../models/Model";
import { SaveGroupChangesResult } from "./SaveGroupChangesResult";

export const SaveGroupChangesMessage = "SaveGroupChangesAction";

export const SaveGroupChanges = (group: Group): ThunkAction<void, RootStateOrAny, unknown, Action<string>> => {
  return async (dispatch: Dispatch, getState: () => Model) => {
    const model = getState();

    // TODO: work out the URL to use
    const url = `http://localhost:2999/groups`;

    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", "Accept": "application/json", "X-UserName": model.userName, "X-Password": model.password },
      body: JSON.stringify(group),
    });

    const json = (await response.json()) as Array<Action>;
    // TODO: respond to the response

    dispatch(SaveGroupChangesResult());
  };
};

export type SaveGroupChangesAction = ReturnType<typeof SaveGroupChanges>;
