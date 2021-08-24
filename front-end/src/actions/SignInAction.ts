export const SignInMessage = "SignInAction";

export const SignIn = () => ( {
  type: SignInMessage
} );

export type SignInAction = ReturnType<typeof SignIn>;
