import CreateGroupMessage from "../components/CreateGroup";

export const CreateGroup = ( name: string ) => ( {
  type: CreateGroupMessage,
  name,
} );

export type CreateGroupAction = ReturnType<typeof CreateGroup>;
