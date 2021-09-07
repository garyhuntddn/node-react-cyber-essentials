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
  enable2FA: boolean;
  cityOfOrigin: string;
  townOrVillage: string;
  color: string;
  mobileNumber: string;
  backupNumber: string;
  employmentStatus: string;
}

export type Model = {
  answers: Answers;
  panel: PanelConstants;
  view: ViewConstants;
  group: string;
  email: string;
  userName: string;
  password: string;
  name: string;
  isAuthenticated: boolean;
  options: Options;

  address1: string;
  address2: string;
  postcode: string;
  automobiles: Array<string>;
  paymentMethods: Array<string>;
  siteReview: string;
  birthday: string;
  submitDate: string;
  favouriteColor: string;
  favouriteMonth: string;
  week: string;
  workingHours: number;
};
