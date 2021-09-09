import { Action } from "redux";
import { UpdateUnsavedGroupNameAction, UpdateUnsavedGroupNameMessage } from "../actions/UpdateUnsavedGroupNameAction";

export const unsavedGroupNameReducer = (unsavedGroupName: string = "", action: Action): string => {
  switch (action.type) {
    case UpdateUnsavedGroupNameMessage: {
      const a = action as UpdateUnsavedGroupNameAction;
      return a.unsavedGroupName;
    }
  }
  return unsavedGroupName;
};
