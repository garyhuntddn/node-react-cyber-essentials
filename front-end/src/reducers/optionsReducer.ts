import { Action } from "redux";
import { SaveOptionsMessage, SaveOptionsAction } from "../actions/SaveOptions";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Options } from "../models/Model";

export const optionsReducer = ( options: Options = { email: "", address1: "", address2: "", automobiles: [], paymentMethods: [], color: ColorConstants.Empty, favouriteColor: "", favouriteMonth: "", backupNumber: "", mobileNumber: "", birthday: "", cityOfOrigin: CityOfOriginConstants.Empty, employmentStatus: EmploymentStatusConstants.Empty, enable2FA: false, postcode: "", siteReview: "", submitDate: "", townOrVillage: "", week: "", workingHours: 4 }, action: Action ) => {
  switch ( action.type ) {
    case SaveOptionsMessage: {
      const a = action as SaveOptionsAction;
      return a.options;
    }
  }

  return options;
}
