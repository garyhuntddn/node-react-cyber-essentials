export const ChangeMobileNumberMessage = "ChangeMobileNumberAction";

export const ChangeMobileNumber = ( number: string ) => ( {
  type: ChangeMobileNumberMessage,
  number,
} );

export type ChangeMobileNumberAction = ReturnType<typeof ChangeMobileNumber>;