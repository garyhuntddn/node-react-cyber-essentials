import { Answer } from "../models/Answer";

export const UpdateAnswerMessage = "UpdateAnswerAction";

export const UpdateAnswer = ( id: string, value: Answer ) => ( {
  type: UpdateAnswerMessage,
  id,
  value
} );

export type UpdateAnswerAction = ReturnType<typeof UpdateAnswer>;