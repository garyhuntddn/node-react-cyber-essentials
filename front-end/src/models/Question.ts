import { QuestionType } from "./QuestionType";

export type Question = {
  id: string,
  type: QuestionType | "",
  question: string,
  optional?: boolean
};