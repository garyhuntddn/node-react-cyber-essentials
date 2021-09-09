export const DeleteUserFromGroupMessage = "DeleteUserFromGroupAction";

export const DeleteUserFromGroup = (group: string, username: string) => ({
  type: DeleteUserFromGroupMessage,
  group,
  username,
});

export type DeleteUserFromGroupAction = ReturnType<typeof DeleteUserFromGroup>;
