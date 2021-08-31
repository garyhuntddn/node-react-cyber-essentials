export const ChangeEnable2FAMessage = "ChangeEnable2FAAction";

export const ChangeEnable2FA = ( enable2FA: boolean ) => ( {
  type: ChangeEnable2FAMessage,
  enable2FA,
} );

export type ChangeEnable2FAAction = ReturnType<typeof ChangeEnable2FA>;