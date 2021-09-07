import { Options } from "../models/Model";

export const SaveOptionsMessage = "SaveOptionsAction";

export const SaveOptions = ( options: Options ) => ( {
  type: SaveOptionsMessage,
  options
} );

export type SaveOptionsAction = ReturnType<typeof SaveOptions>;
