import { Action } from "redux";
import { SignInResultAction, SignInResultMessage } from "../actions/SignInResultAction";
import { SwitchPanelMessage, SwitchPanelAction } from "../actions/SwitchPanel";
import { PanelConstants } from "../models/Model";

export const panelReducer = ( panel: PanelConstants = PanelConstants.Login, action: Action ): PanelConstants => {
  switch ( action.type ) {
    case SignInResultMessage: {
      const a = action as SignInResultAction;
      return a.wasSuccessful ? PanelConstants.Questionnaire : PanelConstants.FailedLogin;
    }

    case SwitchPanelMessage: {
      const a = action as SwitchPanelAction;

      if ( a.panel === PanelConstants.Login ) {
        return a.panel;//, isAuthenticated: false, answers: {} };
      }

      return a.panel;
    }
  }
  return panel;
};
