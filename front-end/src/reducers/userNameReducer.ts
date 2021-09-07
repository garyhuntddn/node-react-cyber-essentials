import { Action } from "redux";
import { ChangeUserNameAction, ChangeUserNameMessage } from "../actions/ChangeUserName";

export const userNameReducer = ( userName: string = "", action: Action ): string => {
  switch ( action.type ) {
    case ChangeUserNameMessage: {
      const a = action as ChangeUserNameAction;
      return a.userName;
    }
  }
  return userName;
};
