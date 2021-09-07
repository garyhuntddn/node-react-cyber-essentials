import { Action } from "redux";
import { ChangeAdress1Message, ChangeAdress1Action } from "../actions/ChangeAddress1";
import { ChangeAdress2Message, ChangeAdress2Action } from "../actions/ChangeAddress2";
import { ChangeBackupNumberMessage, ChangeBackupNumberAction } from "../actions/ChangeBackupNumber";
import { ChangeBirthdayMessage, ChangeBirthdayAction } from "../actions/ChangeBirthdayAction";
import { ChangeCityOfOriginMessage, ChangeCityOfOriginAction } from "../actions/ChangeCityOfOriginAction";
import { ChangeColorMessage, ChangeColorAction } from "../actions/ChangeColorAction";
import { ChangeEmailMessage, ChangeEmailAction } from "../actions/ChangeEmailAction";
import { ChangeEmploymentStatusMessage, ChangeEmploymentStatusAction } from "../actions/ChangeEmploymentStatus";
import { ChangeEnable2FAMessage, ChangeEnable2FAAction } from "../actions/ChangeEnable2FAAction";
import { ChangeFavouriteColorMessage, ChangeFavouriteColorAction } from "../actions/ChangeFavouriteColor";
import { ChangeFavouriteMonthMessage, ChangeFavouriteMonthAction } from "../actions/ChangeFavouriteMonthAction";
import { ChangeMobileNumberMessage, ChangeMobileNumberAction } from "../actions/ChangeMobileNumber";
import { ChangePostcodeMessage, ChangePostcodeAction } from "../actions/ChangePostcode";
import { ChangeSiteReviewMessage, ChangeSiteReviewAction } from "../actions/ChangeSiteReview";
import { ChangeSubmitDateMessage, ChangeSubmitDateAction } from "../actions/ChangeSubmitDateAction";
import { ChangeTownOrVillageMessage, ChangeTownOrVillageAction } from "../actions/ChangeTownOrVillageAction";
import { ChangeWeekMessage, ChangeWeekAction } from "../actions/ChangeWeekAction";
import { ChangeWorkingHoursMessage, ChangeWorkingHoursAction } from "../actions/ChangeWorkingHours";
import { ResetOptionsAction, ResetOptionsMessage } from "../actions/ResetOptions";
import { ToggleAutomobileMessage, ToggleAutomobileAction } from "../actions/ToggleAutomobile";
import { TogglePaymentMethodMessage, TogglePaymentMethodAction } from "../actions/TogglePaymentMethod";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Options } from "../models/Model";

export const unsavedOptionsReducer = ( options: Options = { email: "", address1: "", address2: "", automobiles: [], paymentMethods: [], color: ColorConstants.Empty, favouriteColor: "", favouriteMonth: "", backupNumber: "", mobileNumber: "", birthday: "", cityOfOrigin: CityOfOriginConstants.Empty, employmentStatus: EmploymentStatusConstants.Empty, enable2FA: false, postcode: "", siteReview: "", submitDate: "", townOrVillage: "", week: "", workingHours: 4 }, action: Action ): Options => {
  switch ( action.type ) {
    case ResetOptionsMessage: {
      const a = action as ResetOptionsAction;
      return a.options;
    }

    case ChangeEnable2FAMessage: {
      const a = action as ChangeEnable2FAAction;
      return { ...options, enable2FA: a.enable2FA };
    }

    case ChangeEmailMessage: {
      const a = action as ChangeEmailAction;
      return { ...options, email: a.email };
    }

    case ChangeCityOfOriginMessage: {
      const a = action as ChangeCityOfOriginAction;
      return { ...options, cityOfOrigin: a.cityOfOrigin };
    }

    case ChangeColorMessage: {
      const a = action as ChangeColorAction;
      return { ...options, color: a.color };
    }

    case ChangeMobileNumberMessage: {
      const a = action as ChangeMobileNumberAction;
      return { ...options, mobileNumber: a.number };
    }

    case ChangeEmploymentStatusMessage: {
      const a = action as ChangeEmploymentStatusAction;
      return { ...options, employmentStatus: a.employmentStatus };
    }

    case ChangeAdress2Message: {
      const a = action as ChangeAdress2Action;
      return { ...options, address2: a.address2 };
    }

    case ChangeAdress1Message: {
      const a = action as ChangeAdress1Action;
      return { ...options, address1: a.address1 };
    }

    case ChangePostcodeMessage: {
      const a = action as ChangePostcodeAction;
      return { ...options, postcode: a.postcode };
    }

    case ChangeBackupNumberMessage: {
      const a = action as ChangeBackupNumberAction;
      return { ...options, backupNumber: a.backup };
    }

    case ChangeTownOrVillageMessage: {
      const a = action as ChangeTownOrVillageAction;
      return { ...options, townOrVillage: a.townOrVillage };
    }

    case ToggleAutomobileMessage: {
      const a = action as ToggleAutomobileAction;
      if ( options.automobiles.indexOf( a.automobile ) > -1 ) {
        const x = [ ...options.automobiles ];
        x.splice( options.automobiles.indexOf( a.automobile ), 1 );
        return { ...options, automobiles: x }
      } else {
        return { ...options, automobiles: [ a.automobile, ...options.automobiles ] };
      }
    }

    case TogglePaymentMethodMessage: {
      const a = action as TogglePaymentMethodAction;
      if ( options.paymentMethods.indexOf( a.paymentMethod ) > -1 ) {
        const x = [ ...options.paymentMethods ];
        x.splice( options.paymentMethods.indexOf( a.paymentMethod ), 1 );
        return { ...options, paymentMethods: x }
      } else {
        return { ...options, paymentMethods: [ a.paymentMethod, ...options.paymentMethods ] }
      };
    }

    case ChangeSiteReviewMessage: {
      const a = action as ChangeSiteReviewAction;
      return { ...options, siteReview: a.siteReview };
    }

    case ChangeBirthdayMessage: {
      const a = action as ChangeBirthdayAction;
      return { ...options, birthday: a.birthday };
    }

    case ChangeSubmitDateMessage: {
      const a = action as ChangeSubmitDateAction;
      return { ...options, submitDate: a.submitDate };
    }

    case ChangeFavouriteColorMessage: {
      const a = action as ChangeFavouriteColorAction;
      return { ...options, favouriteColor: a.favouriteColor };
    }

    case ChangeFavouriteMonthMessage: {
      const a = action as ChangeFavouriteMonthAction;
      return { ...options, favouriteMonth: a.favouriteMonth };
    }

    case ChangeWeekMessage: {
      const a = action as ChangeWeekAction;
      return { ...options, week: a.week };
    }

    case ChangeWorkingHoursMessage: {
      const a = action as ChangeWorkingHoursAction;
      return { ...options, workingHours: a.workingHours };
    }
  }

  return options;
};
