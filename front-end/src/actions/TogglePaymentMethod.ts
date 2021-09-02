export const TogglePaymentMethodMessage = "TogglePaymentMethodAction";

export const TogglePaymentMethod = ( payment: string ) => ( {
  type: TogglePaymentMethodMessage,
  payment,
} );

export type TogglePaymentMethodAction = ReturnType<typeof TogglePaymentMethod>;