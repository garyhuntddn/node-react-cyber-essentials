import { Answers } from "./Answers";

export enum ViewConstants {
  Editable,
  ReadOnly
}

export type Model = {
  answers: Answers;
  view: ViewConstants;
}