import { Answers } from "./Answers";

export enum PanelConstants {
  Login,
  FailedLogin,
  Questionnaire,
  CreateGroup,
  OptionsPanel
}

export enum ViewConstants {
  Editable,
  ReadOnly,
}

export type Options= {
  address1: string;
  address2: string;
  automobiles: Array<string>;
  backupNumber: string;
  birthday: string;
  color: string;
  cityOfOrigin: string;
  email: string;
  employmentStatus: string;
  enable2FA: boolean;
  favouriteColor: string;
  favouriteMonth: string;
  mobileNumber: string;
  paymentMethods: Array<string>;
  postcode: string;
  siteReview: string;
  submitDate: string;
  townOrVillage: string;
  week: string;
  workingHours: number;
}

export type Model = {
  answers: Answers;
  panel: PanelConstants;
  view: ViewConstants;
  group: string;
  userName: string;
  password: string;
  name: string;
  isAuthenticated: boolean;
  options: Options;
};
