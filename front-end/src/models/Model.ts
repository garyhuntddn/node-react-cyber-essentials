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
  enable2FA: boolean;
  cityOfOrigin: string;
  townOrVillage: string;
  color: string;
  mobileNumber: string;
  backupNumber: string;
  employmentStatus: string;
  address1: string;
  address2: string;
  postcode: string;
  automobile: string;
};
