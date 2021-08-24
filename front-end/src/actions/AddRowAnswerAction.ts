import { Hardware } from "../models/Hardware";
import { Network } from "../models/Network";
import { Software } from "../models/Software";

export const AddRowAnswerMessage = "AddRowAnswerAction";

export const AddRowAnswer = ( id: string, value: Hardware | Software | Network ) => ( {
  type: AddRowAnswerMessage,
  id,
  value,
} );

export type AddRowAnswerAction = ReturnType<typeof AddRowAnswer>;
