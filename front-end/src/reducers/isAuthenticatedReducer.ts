import { Action } from "redux";
import { SignInResultMessage, SignInResultAction } from "../actions/SignInResultAction";
import { SwitchPanelMessage, SwitchPanelAction } from "../actions/SwitchPanel";
import { PanelConstants } from "../models/Model";

export const isAuthenticatedReducer = ( isAuthenticated: boolean = false, action: Action ): boolean => {
  switch ( action.type ) {
    case SignInResultMessage: {
      const a = action as SignInResultAction;
      return a.wasSuccessful;
    }
    
    case SwitchPanelMessage: {
      const a = action as SwitchPanelAction;

      if ( a.panel === PanelConstants.Login ) return false;
      return isAuthenticated;
    }
  }
  return isAuthenticated;
};
