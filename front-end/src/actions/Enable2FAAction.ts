export const Enable2FAMessage = "Enable2FAAction";

export const Enable2FA = ( enable2FA: boolean ) => ( {
  type: Enable2FAMessage,
  enable2FA,
} );

export type Enable2FAAction = ReturnType<typeof Enable2FA>;