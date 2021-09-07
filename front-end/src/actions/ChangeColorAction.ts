import { ColorConstants } from "../models/Model";

export const ChangeColorMessage = "ChangeColorAction";

export const ChangeColor = ( color: ColorConstants ) => ( {
  type: ChangeColorMessage,
  color,
} );

export type ChangeColorAction = ReturnType<typeof ChangeColor>;