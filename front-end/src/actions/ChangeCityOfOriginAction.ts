export const ChangeCityOfOriginMessage = "ChangeCityOfOriginAction";

export const ChangeCityOfOrigin = ( cityOfOrigin: string ) => ( {
  type: ChangeCityOfOriginMessage,
  cityOfOrigin,
} );

export type ChangeCityOfOriginAction = ReturnType<typeof ChangeCityOfOrigin>;