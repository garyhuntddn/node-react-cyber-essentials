export const ChangeAdress2Message = "ChangeAdress2Action";

export const ChangeAdress2 = ( address2: string ) => ( {
  type: ChangeAdress2Message,
  address2,
} );

export type ChangeAdress2Action = ReturnType<typeof ChangeAdress2>;