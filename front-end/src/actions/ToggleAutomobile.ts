import { VehicleConstants } from "../models/Model";

export const ToggleAutomobileMessage = "ToggleAutomobileAction";

export const ToggleAutomobile = ( automobile: VehicleConstants ) => ( {
  type: ToggleAutomobileMessage,
  automobile,
} );

export type ToggleAutomobileAction = ReturnType<typeof ToggleAutomobile>;