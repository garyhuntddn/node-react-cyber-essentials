export const ChangeAdress1Message = "ChangeAdress1Action";

export const ChangeAdress1 = ( address1: string ) => ( {
  type: ChangeAdress1Message,
  address1,
} );

export type ChangeAdress1Action = ReturnType<typeof ChangeAdress1>;