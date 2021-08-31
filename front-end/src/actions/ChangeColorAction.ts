export const ChangeColorMessage = "ChangeColorAction";

export const ChangeColor = ( color: string ) => ( {
  type: ChangeColorMessage,
  color,
} );

export type ChangeColorAction = ReturnType<typeof ChangeColor>;