export const ChangeUserNameMessage = "ChangeUserNameAction";

export const ChangeUserName = ( userName:string ) => ( {
  type: ChangeUserNameMessage,
  userName
} );

export type ChangeUserNameAction = ReturnType<typeof ChangeUserName>;