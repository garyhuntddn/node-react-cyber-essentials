import { Action } from "redux";

export const SaveGroupChangesResultMessage = "SaveGroupChangesResultAction";

export const SaveGroupChangesResult = (): Action => ({ type: SaveGroupChangesResultMessage });

export type SaveGroupChangesResultAction = ReturnType<typeof SaveGroupChangesResult>;
