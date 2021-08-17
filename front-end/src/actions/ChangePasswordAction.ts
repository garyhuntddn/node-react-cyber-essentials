
export const ChangePasswordMessage = "ChangePasswordAction";

export const ChangePassword = ( password: string ) => ( {
  type: ChangePasswordMessage,
  password
} );

export type ChangePasswordAction = ReturnType<typeof ChangePassword>;