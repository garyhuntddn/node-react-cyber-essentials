import { Action } from "redux";
import { ChangeViewAction, ChangeViewMessage } from "../actions/ChangeViewAction";
import { Model } from "../models/Model";

const reducers = ( model: Model, action: Action ): Model => {
  switch ( action.type ) {
    case ChangeViewMessage: {
      const a = action as ChangeViewAction;
      return { ...model, view: a.view };
    }
  }

  return model;
}

export default reducers;