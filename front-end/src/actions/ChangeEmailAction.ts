export const ChangeEmailMessage = "ChangeEmailAction";

export const ChangeEmail = ( email: string ) => ( {
  type: ChangeEmailMessage,
  email,
} );

export type ChangeEmailAction = ReturnType<typeof ChangeEmail>;
