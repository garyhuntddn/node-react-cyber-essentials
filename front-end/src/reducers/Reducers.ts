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
import { CreateGroupMessage } from "../actions/CreateGroupAction";
import { ChangeEmailAction, ChangeEmailMessage } from "../actions/ChangeEmailAction";
import { ChangeEnable2FAAction, ChangeEnable2FAMessage } from "../actions/ChangeEnable2FAAction";
import { ChangeCityOfOriginAction, ChangeCityOfOriginMessage } from "../actions/ChangeCityOfOriginAction";
import { ChangeColorAction, ChangeColorMessage } from "../actions/ChangeColorAction";
import { ChangeMobileNumberAction, ChangeMobileNumberMessage } from "../actions/ChangeMobileNumber";
import { ChangeEmploymentStatusMessage, ChangeEmploymentStatusAction } from "../actions/ChangeEmploymentStatus";
import { ChangeAdress2Action, ChangeAdress2Message } from "../actions/ChangeAddress2";
import { ChangeAdress1Action, ChangeAdress1Message } from "../actions/ChangeAddress1";
import { ChangePostcodeAction, ChangePostcodeMessage } from "../actions/ChangePostcode";
import { ChangeBackupNumberAction, ChangeBackupNumberMessage } from "../actions/ChangeBackupNumber";
import { ChangeTownOrVillageAction, ChangeTownOrVillageMessage } from "../actions/ChangeTownOrVillageAction";
import { ToggleAutomobileAction, ToggleAutomobileMessage } from "../actions/ToggleAutomobile";
import { TogglePaymentMethodAction, TogglePaymentMethodMessage } from "../actions/TogglePaymentMethod";
import { ChangeSiteReviewAction, ChangeSiteReviewMessage } from "../actions/ChangeSiteReview";
import { ChangeBirthdayAction, ChangeBirthdayMessage } from "../actions/ChangeBirthdayAction";
import { ChangeSubmitDateAction, ChangeSubmitDateMessage } from "../actions/ChangeSubmitDateAction";
import { ChangeFavouriteColorAction, ChangeFavouriteColorMessage } from "../actions/ChangeFavouriteColor";
import { ChangeFavouriteMonthAction, ChangeFavouriteMonthMessage } from "../actions/ChangeFavouriteMonthAction";
import { ChangeWeekAction, ChangeWeekMessage } from "../actions/ChangeWeekAction";
import { ChangeWorkingHoursAction, ChangeWorkingHoursMessage } from "../actions/ChangeWorkingHours";

const reducers = ( model: Model, action: Action ): Model => {
  switch ( action.type ) {
    case ChangeViewMessage: {
      const a = action as ChangeViewAction;
      return { ...model, view: a.view };
    }

    case UpdateAnswerMessage: {
      const a = action as UpdateAnswerAction;
      return { ...model, answers: { ...model.answers, [ a.id ]: a.value } };
    }

    case UpdateRowAnswerMessage: {
      const a = action as UpdateRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( model.answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray[ a.index ] = { ...a.value };
      const newAnswers = { ...model.answers, [ a.id ]: newArray as Answer };

      return { ...model, answers: newAnswers };
    }

    case DeleteRowAnswerMessage: {
      const a = action as DeleteRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( model.answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray.splice( a.index, 1 );
      const newAnswers = { ...model.answers, [ a.id ]: newArray as Answer };

      return { ...model, answers: newAnswers };
    }

    case AddRowAnswerMessage: {
      const a = action as AddRowAnswerAction;
      const existingArray: Array<Hardware | Software | Network> = ( model.answers[ a.id ] as Array<Hardware | Software | Network> ) || [];
      const newArray = [ ...existingArray ];
      newArray.push( a.value );
      const newAnswers = { ...model.answers, [ a.id ]: newArray as Answer };

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

      if ( a.panel === PanelConstants.Login ) {
        return { ...model, panel: a.panel, password: "", isAuthenticated: false, answers: {} };
      }

      return { ...model, panel: a.panel };
    }

    case CreateGroupMessage: {
      //const a = action as CreateGroupAction;
      return { ...model };
    }

    case ChangeEnable2FAMessage: {
      const a = action as ChangeEnable2FAAction;
      return { ...model, options: { ...model.options, enable2FA: a.enable2FA } };
    }

    case ChangeEmailMessage: {
      const a = action as ChangeEmailAction;
      return { ...model, email: a.email };
    }

    case ChangeCityOfOriginMessage: {
      const a = action as ChangeCityOfOriginAction;
      return { ...model, cityOfOrigin: a.cityOfOrigin };
    }

    case ChangeColorMessage: {
      const a = action as ChangeColorAction;
      return { ...model, color: a.color };
    }

    case ChangeMobileNumberMessage: {
      const a = action as ChangeMobileNumberAction;
      return { ...model, mobileNumber: a.number };
    }

    case ChangeEmploymentStatusMessage: {
      const a = action as ChangeEmploymentStatusAction;
      return { ...model, employmentStatus: a.employmentStatus };
    }

    case ChangeAdress2Message: {
      const a = action as ChangeAdress2Action;
      return { ...model, address2: a.address2 };
    }

    case ChangeAdress1Message: {
      const a = action as ChangeAdress1Action;
      return { ...model, address1: a.address1 };
    }

    case ChangePostcodeMessage: {
      const a = action as ChangePostcodeAction;
      return { ...model, postcode: a.postcode };
    }

    case ChangeBackupNumberMessage: {
      const a = action as ChangeBackupNumberAction;
      return { ...model, backupNumber: a.backup };
    }

    case ChangeTownOrVillageMessage: {
      const a = action as ChangeTownOrVillageAction;
      return { ...model, townOrVillage: a.townOrVillage };
    }

    case ToggleAutomobileMessage: {
      const a = action as ToggleAutomobileAction;
      if ( model.automobiles.indexOf( a.automobile ) > -1 ) {
        const x = [ ...model.automobiles ];
        x.splice( model.automobiles.indexOf( a.automobile ), 1 );
        return { ...model, automobiles: x };
      } else {
        return { ...model, automobiles: [ a.automobile, ...model.automobiles ] };
      }
    }

    case TogglePaymentMethodMessage: {
      const a = action as TogglePaymentMethodAction;
      if ( model.paymentMethods.indexOf( a.payment ) > -1 ) {
        const x = [ ...model.automobiles ];
        x.splice( model.paymentMethods.indexOf( a.payment ), 1 );
        return { ...model, paymentMethods: x };
      } else {
        return { ...model, paymentMethods: [ a.payment, ...model.paymentMethods ] };
      }
    }

    case ChangeSiteReviewMessage: {
      const a = action as ChangeSiteReviewAction;
      return { ...model, siteReview: a.siteReview };
    }

    case ChangeBirthdayMessage: {
      const a = action as ChangeBirthdayAction;
      return { ...model, birthday: a.birthday };
    }

    case ChangeSubmitDateMessage: {
      const a = action as ChangeSubmitDateAction;
      return { ...model, submitDate: a.submitDate };
    }

    case ChangeFavouriteColorMessage: {
      const a = action as ChangeFavouriteColorAction;
      return { ...model, favouriteColor: a.favouriteColor };
    }

    case ChangeFavouriteMonthMessage: {
      const a = action as ChangeFavouriteMonthAction;
      return { ...model, favouriteMonth: a.favouriteMonth };
    }

    case ChangeWeekMessage: {
      const a = action as ChangeWeekAction;
      return { ...model, week: a.week };
    }

    case ChangeWorkingHoursMessage: {
      const a = action as ChangeWorkingHoursAction;
      return { ...model, workingHours: a.workingHours };
    }
  }
  return model;
};

export default reducers;
