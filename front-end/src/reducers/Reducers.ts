import { Action } from "redux";
import { ChangeViewAction, ChangeViewMessage } from "../actions/ChangeViewAction";
import { UpdateAnswerAction, UpdateAnswerMessage } from "../actions/UpdateAnswerAction";
import { UpdateRowAnswerAction, UpdateRowAnswerMessage } from "../actions/UpdateRowAnswerAction";
import { Answer } from "../models/Answer";
import { Hardware } from "../models/Hardware";

import { Model } from "../models/Model";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

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
    case UpdateRowAnswerMessage: {
      const a = action as UpdateRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = (model.answers[a.id] as Array<Hardware | Software | Network>) || [];
      const newArray = [...existingArray];
      newArray[a.index] = { ...a.value };
      const newAnswers = { ...model.answers, [a.id]: newArray as Answer };

      return { ...model, answers: newAnswers };
    }
  }

  return model;
};

export default reducers;
