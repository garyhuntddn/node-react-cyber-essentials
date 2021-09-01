export const ToggleAutomobileMessage = "ToggleAutomobileAction";

export const ToggleAutomobile = ( automobile: string ) => ( {
  type: ToggleAutomobileMessage,
  automobile,
} );

export type ToggleAutomobileAction = ReturnType<typeof ToggleAutomobile>;