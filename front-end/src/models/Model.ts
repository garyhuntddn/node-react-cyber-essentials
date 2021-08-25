import { Answers } from "./Answers";

export enum PanelConstants {
  Login,
  FailedLogin,
  Questionnaire,
  CreateGroup
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
  userName: string;
  password: string;
  name: string;
  isAuthenticated: boolean;
};
