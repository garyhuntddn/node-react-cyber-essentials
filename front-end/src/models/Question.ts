import { HardwareType } from "./Hardware";
import { QuestionType } from "./QuestionType";
import { SoftwareType } from "./Software";

export type Question = {
  id: string;
  type: QuestionType;
  subType?: HardwareType | SoftwareType;
  question: string;
  optional?: boolean;
  prompt?: string;
  tooltip?: string;
};
