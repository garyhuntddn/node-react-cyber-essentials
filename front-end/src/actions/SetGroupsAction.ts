import { Group } from "../models/Model";

export const SetGroupsMessage = "SetGroupsAction";

export const SetGroups = (groups: Array<Group>) => ({
  type: SetGroupsMessage,
  groups,
});

export type SetGroupsAction = ReturnType<typeof SetGroups>;
