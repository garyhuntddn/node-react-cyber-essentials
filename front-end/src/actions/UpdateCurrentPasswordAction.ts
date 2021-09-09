export const UpdateCurrentPasswordMessage = "UpdateCurrentPasswordAction";

export const UpdateCurrentPassword = ( currentPassword: string ) => ( {
  type: UpdateCurrentPasswordMessage,
  currentPassword
} );

export type UpdateCurrentPasswordAction = ReturnType<typeof UpdateCurrentPassword>;