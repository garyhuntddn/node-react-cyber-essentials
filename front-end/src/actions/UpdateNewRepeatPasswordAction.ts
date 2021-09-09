export const UpdateNewRepeatPasswordMessage = "UpdateNewRepeatPasswordAction";

export const UpdateNewRepeatPassword = ( newRepeatPassword: string ) => ( {
  type: UpdateNewRepeatPasswordMessage,
  newRepeatPassword
} );

export type UpdateNewRepeatPasswordAction = ReturnType<typeof UpdateNewRepeatPassword>;