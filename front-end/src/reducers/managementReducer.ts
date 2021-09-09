import { Action } from "redux";
import { AddUserToGroupAction, AddUserToGroupMessage } from "../actions/AddUserToGroupAction";
import { ChangeUnusedAddUserAction, ChangeUnusedAddUserMessage } from "../actions/ChangeUnsavedAddUser";
import { CreateGroupAction, CreateGroupMessage } from "../actions/CreateGroupAction";
import { DeleteUserFromGroupAction, DeleteUserFromGroupMessage } from "../actions/DeleteUserFromGroupAction";
import { SelectGroupAction, SelectGroupMessage } from "../actions/SelectGroupAction";
import { UpdateCurrentPasswordAction, UpdateCurrentPasswordMessage } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPasswordAction, UpdateNewPasswordMessage } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPasswordAction, UpdateNewRepeatPasswordMessage } from "../actions/UpdateNewRepeatPasswordAction";
import { Management } from "../models/Model";

export const managementReducer = (management: Management = { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "", selectedGroup: "", unsavedAddUser: "" }, action: Action): Management => {
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
      return { ...management, groups: [...management.groups, { name: a.name, isOwner: true, users: [] }], selectedGroup: selectedGroup };
    }

    case SelectGroupMessage: {
      const a = action as SelectGroupAction;
      return { ...management, selectedGroup: a.selectedGroup };
    }

    case ChangeUnusedAddUserMessage: {
      const a = action as ChangeUnusedAddUserAction;
      return { ...management, unsavedAddUser: a.userName };
    }

    case AddUserToGroupMessage: {
      const a = action as AddUserToGroupAction;
      // get the group in question
      const updatedGroup = { ...management.groups.filter(m => m.name === a.group)[0] };
      updatedGroup.users = [...updatedGroup.users, a.username];

      // create a new array of all of the other groups, with the updated group appended
      const groups = management.groups.map(m => (m.name === a.group ? updatedGroup : m));
      return { ...management, groups };
    }

    case DeleteUserFromGroupMessage: {
      const a = action as DeleteUserFromGroupAction;
      // get the group in question
      const updatedGroup = { ...management.groups.filter(m => m.name === a.group)[0] };
      updatedGroup.users = updatedGroup.users.filter(m => m !== a.username);

      // create a new array of all of the other groups, with the updated group appended
      const groups = management.groups.map(m => (m.name === a.group ? updatedGroup : m));
      return { ...management, groups };
    }
  }

  return management;
};
