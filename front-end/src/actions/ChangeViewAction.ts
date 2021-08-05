import { ViewConstants } from "../models/Model";

export const ChangeViewMessage = "ChangeViewAction";

export const ChangeView = ( view: ViewConstants ) => ( {
  type: ChangeViewMessage,
  view
} );

export type ChangeViewAction = ReturnType<typeof ChangeView>;