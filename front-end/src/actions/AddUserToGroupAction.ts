export const AddUserToGroupMessage = "AddUserToGroupAction";

export const AddUserToGroup = (group: string, username: string) => ({
  type: AddUserToGroupMessage,
  group,
  username,
});

export type AddUserToGroupAction = ReturnType<typeof AddUserToGroup>;
