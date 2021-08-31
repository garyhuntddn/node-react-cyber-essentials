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
import { Model, PanelConstants } from "../models/Model";
import { Network } from "../models/Network";
import { Software } from "../models/Software";
import { SignInResultAction, SignInResultMessage } from "../actions/SignInResultAction";
import { SwitchPanelAction, SwitchPanelMessage } from "../actions/SwitchPanel";
import { CreateGroupAction, CreateGroupMessage } from "../actions/CreateGroupAction";
import { ChangeEmailAction, ChangeEmailMessage } from "../actions/ChangeEmailAction";
import { ChangeEnable2FAAction, ChangeEnable2FAMessage } from "../actions/ChangeEnable2FAAction";

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

    case SignInResultMessage: {
      const a = action as SignInResultAction;
      return { ...model, isAuthenticated: a.wasSuccessful, panel: a.wasSuccessful ? PanelConstants.Questionnaire : PanelConstants.FailedLogin };
    }

    case SwitchPanelMessage: {
      const a = action as SwitchPanelAction;

      if (a.panel === PanelConstants.Login) {
        return { ...model, panel: a.panel, password: "", isAuthenticated: false, answers: {} };
      }

      return { ...model, panel: a.panel };
    }

    case CreateGroupMessage: {
      const a = action as CreateGroupAction;
      return { ...model };
    }

    case ChangeEnable2FAMessage: {
      const a = action as ChangeEnable2FAAction;
      return { ...model, enable2FA: a.enable2FA };
    }

    case ChangeEmailMessage: {
      const a = action as ChangeEmailAction;
      return { ...model, email: a.email };
    }
  }
  return model;
};

export default reducers;
