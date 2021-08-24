import { PanelConstants } from "../models/Model";

export const SwitchPanelMessage = "SwitchPanelAction";

export const SwitchPanel = ( panel: PanelConstants ) => ( {
  type: SwitchPanelMessage,
  panel
} );

export type SwitchPanelAction = ReturnType<typeof SwitchPanel>;
