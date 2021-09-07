import { Action } from "redux";
import { ChangePasswordMessage, ChangePasswordAction } from "../actions/ChangePasswordAction";
import { SwitchPanelMessage, SwitchPanelAction } from "../actions/SwitchPanel";
import { PanelConstants } from "../models/Model";

export const passwordReducer = ( password: string = "", action: Action ): string => {
  switch ( action.type ) {
    case ChangePasswordMessage: {
      const a = action as ChangePasswordAction;
      return a.password;
    }

    case SwitchPanelMessage: {
      const a = action as SwitchPanelAction;

      if ( a.panel === PanelConstants.Login ) return "";

      return password;
    }
  }
  return password;
};
