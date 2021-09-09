export const ChangeUnusedAddUserMessage = "ChangeUnusedAddUserAction";

export const ChangeUnusedAddUser = ( userName: string ) => ( {
  type: ChangeUnusedAddUserMessage,
  userName,
} );

export type ChangeUnusedAddUserAction = ReturnType<typeof ChangeUnusedAddUser>;
