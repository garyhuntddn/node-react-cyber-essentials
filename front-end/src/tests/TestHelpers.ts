import { answers } from "../models/answerList";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Model, ViewConstants, PanelConstants, Options } from "../models/Model";

export const createInitialOptions = (): Options => {
  return { enable2FA: false, cityOfOrigin: CityOfOriginConstants.Empty, townOrVillage: "", backupNumber: "", mobileNumber: "", color: ColorConstants.Empty, employmentStatus: EmploymentStatusConstants.Empty, favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], postcode: "", address2: "", address1: "", workingHours: 0, week: "", email: "" };
};

export const createInitialModel = (): Model => {
  return { unsavedGroupName: "", answers, view: ViewConstants.Editable, name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false, options: createInitialOptions(), unsavedOptions: createInitialOptions(), management: { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "", selectedGroup: "", unsavedAddUser: "" } };
};
