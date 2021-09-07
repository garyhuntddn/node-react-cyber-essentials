import { PaymentMethodConstants } from "../models/Model";

export const TogglePaymentMethodMessage = "TogglePaymentMethodAction";

export const TogglePaymentMethod = ( paymentMethod: PaymentMethodConstants ) => ( {
  type: TogglePaymentMethodMessage,
  paymentMethod,
} );

export type TogglePaymentMethodAction = ReturnType<typeof TogglePaymentMethod>;