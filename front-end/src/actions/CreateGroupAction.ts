export const CreateGroupMessage = "CreateGroupAction";

export const CreateGroup = (username: string, name: string) => ({
  type: CreateGroupMessage,
  username,
  name,
});

export type CreateGroupAction = ReturnType<typeof CreateGroup>;
