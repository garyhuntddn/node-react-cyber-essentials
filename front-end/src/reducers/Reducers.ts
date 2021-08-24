import { Action } from "redux";
import { AddRowAnswerAction, AddRowAnswerMessage } from "../actions/AddRowAnswerAction";
import { ChangePasswordAction, ChangePasswordMessage } from "../actions/ChangePasswordAction";
import { ChangeViewAction, ChangeViewMessage } from "../actions/ChangeViewAction";
import { DeleteRowAnswerAction, DeleteRowAnswerMessage } from "../actions/DeleteRowAnswerAction";
import { UpdateAnswerAction, UpdateAnswerMessage } from "../actions/UpdateAnswerAction";
import { UpdateRowAnswerAction, UpdateRowAnswerMessage } from "../actions/UpdateRowAnswerAction";
import { ChangeUserNameAction, ChangeUserNameMessage } from "../actions/ChangeUserName";
import { Answer } from "../models/Answer";
import { Hardware } from "../models/Hardware";
import { Model } from "../models/Model";
import { Network } from "../models/Network";
import { Software } from "../models/Software";
import { SignInAction, SignInMessage } from "../actions/SignInAction";

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

    case DeleteRowAnswerMessage: {
      const a = action as DeleteRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = (model.answers[a.id] as Array<Hardware | Software | Network>) || [];
      const newArray = [...existingArray];
      newArray.splice(a.index, 1);
      const newAnswers = { ...model.answers, [a.id]: newArray as Answer };

      return { ...model, answers: newAnswers };
    }

    case AddRowAnswerMessage: {
      const a = action as AddRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = (model.answers[a.id] as Array<Hardware | Software | Network>) || [];
      const newArray = [...existingArray];
      newArray.push(a.value);
      const newAnswers = { ...model.answers, [a.id]: newArray as Answer };

      return { ...model, answers: newAnswers };
    }

    case ChangeUserNameMessage: {
      const a = action as ChangeUserNameAction;
      return { ...model, userName: a.userName };
    }

    case ChangePasswordMessage: {
      const a = action as ChangePasswordAction;
      return { ...model, password: a.password };
    }
      
    case SignInMessage: {
      const a = action as SignInAction;
      return { ...model };
    }
  }
  return model;
};

export default reducers;
