import { Action } from "redux";
import { ChangeViewAction, ChangeViewMessage } from "../actions/ChangeViewAction";
import { ViewConstants } from "../models/Model";

export const viewReducer = ( view: ViewConstants = ViewConstants.Editable, action: Action ): ViewConstants => {
  switch ( action.type ) {
    case ChangeViewMessage: {
      const a = action as ChangeViewAction;
      return a.view;
    }
  }
  return view;
};
