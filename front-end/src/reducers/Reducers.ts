import { Action } from "redux";
import { ChangeViewAction, ChangeViewMessage } from "../actions/ChangeViewAction";
import { UpdateAnswerAction, UpdateAnswerMessage } from "../actions/UpdateAnswerAction";
import { Model } from "../models/Model";

const reducers = (model: Model, action: Action): Model => {
  switch (action.type) {
    case ChangeViewMessage: {
      const a = action as ChangeViewAction;
      return { ...model, view: a.view };
    }

    case UpdateAnswerMessage: {
      const a = action as UpdateAnswerAction;
      return { ...model, answers: { ...model.answers, [a.id]: a.value } };
    }
  }

  return model;
};

export default reducers;
