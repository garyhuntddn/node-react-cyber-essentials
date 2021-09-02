export const ChangeFavouriteMonthMessage = "ChangeFavouriteMonthAction";

export const ChangeFavouriteMonth = ( favouriteMonth: string ) => ( {
  type: ChangeFavouriteMonthMessage,
  favouriteMonth,
} );

export type ChangeFavouriteMonthAction = ReturnType<typeof ChangeFavouriteMonth>;