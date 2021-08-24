export const SignInResultMessage = "SignInResultAction";

export const SignInResult = ( wasSuccessful: boolean ) => ( {
  type: SignInResultMessage,
  wasSuccessful
} );

export type SignInResultAction = ReturnType<typeof SignInResult>;
