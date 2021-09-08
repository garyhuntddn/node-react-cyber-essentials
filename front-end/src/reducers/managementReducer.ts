import { Action } from "redux";
import { ToggleGroupAction, ToggleGroupMessage } from "../actions/ToggleGroup";
import { Management } from "../models/Model";

export const managementReducer = (management: Management = { groups: [] }, action: Action) => {
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
  }

  return management;
};
