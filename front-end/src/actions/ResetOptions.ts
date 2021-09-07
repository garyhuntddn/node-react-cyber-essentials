import { Options } from "../models/Model";

export const ResetOptionsMessage = "ResetOptionsAction";

export const ResetOptions = ( options: Options ) => ( {
  type: ResetOptionsMessage,
  options
} );

export type ResetOptionsAction = ReturnType<typeof ResetOptions>;
