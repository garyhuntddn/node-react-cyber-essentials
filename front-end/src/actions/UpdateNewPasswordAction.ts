export const UpdateNewPasswordMessage = "UpdateNewPasswordAction";

export const UpdateNewPassword = ( newPassword: string ) => ( {
  type: UpdateNewPasswordMessage,
  newPassword
} );

export type UpdateNewPasswordAction = ReturnType<typeof UpdateNewPassword>;