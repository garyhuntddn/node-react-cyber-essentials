import { Action } from "redux";
import { ToggleGroupAction, ToggleGroupMessage } from "../actions/ToggleGroup";
import { UpdateCurrentPasswordAction, UpdateCurrentPasswordMessage } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPasswordAction, UpdateNewPasswordMessage } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPasswordAction, UpdateNewRepeatPasswordMessage } from "../actions/UpdateNewRepeatPasswordAction";
import { Management } from "../models/Model";

export const managementReducer = (management: Management = { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "" }, action: Action): Management => {
  switch (action.type) {
    case ToggleGroupMessage: {
      const a = action as ToggleGroupAction;
      if (management.groups.indexOf(a.group) > -1) {
        const x = [...management.groups];
        x.splice(management.groups.indexOf(a.group), 1);
        return { ...management, groups: x };
      } else {
        return { ...management, groups: [a.group, ...management.groups] };
      }
    }

    case UpdateCurrentPasswordMessage: {
      const a = action as UpdateCurrentPasswordAction;
      return { ...management, currentPassword: a.currentPassword };
    }

    case UpdateNewPasswordMessage: {
        const a = action as UpdateNewPasswordAction;
        return { ...management, newPassword: a.newPassword };
      }

      case UpdateNewRepeatPasswordMessage: {
        const a = action as UpdateNewRepeatPasswordAction;
        return { ...management, newRepeatPassword: a.newRepeatPassword };
      }
  }

  return management;
};
