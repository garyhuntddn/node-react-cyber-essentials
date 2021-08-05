import { Hardware } from "../models/Hardware";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

export const UpdateRowAnswerMessage = "UpdateRowAnswerAction";

export const UpdateRowAnswer = ( id: string, index: number, value: Hardware | Software | Network ) => ( {
  type: UpdateRowAnswerMessage,
  id,
  value,
  index
} );

export type UpdateRowAnswerAction = ReturnType<typeof UpdateRowAnswer>;