import { Action } from "redux";
import { CreateGroupAction, CreateGroupMessage } from "../actions/CreateGroupAction";
import { SelectGroupAction, SelectGroupMessage } from "../actions/SelectGroupAction";
import { UpdateCurrentPasswordAction, UpdateCurrentPasswordMessage } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPasswordAction, UpdateNewPasswordMessage } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPasswordAction, UpdateNewRepeatPasswordMessage } from "../actions/UpdateNewRepeatPasswordAction";
import { Management } from "../models/Model";

export const managementReducer = (management: Management = { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "", selectedGroup: "" }, action: Action): Management => {
  switch (action.type) {
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

    case CreateGroupMessage: {
      const a = action as CreateGroupAction;
      let selectedGroup = management.selectedGroup;
      if (selectedGroup === "") {
        selectedGroup = a.name;
      }
      return { ...management, groups: [...management.groups, a.name], selectedGroup: selectedGroup };
    }

    case SelectGroupMessage: {
      const a = action as SelectGroupAction;
      return { ...management, selectedGroup: a.selectedGroup };
    }
  }

  return management;
};
