import { CityOfOriginConstants } from "../models/Model";

export const ChangeCityOfOriginMessage = "ChangeCityOfOriginAction";

export const ChangeCityOfOrigin = ( cityOfOrigin: CityOfOriginConstants ) => ( {
  type: ChangeCityOfOriginMessage,
  cityOfOrigin,
} );

export type ChangeCityOfOriginAction = ReturnType<typeof ChangeCityOfOrigin>;