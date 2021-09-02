export const ChangeFavouriteColorMessage = "ChangeFavouriteColorAction";

export const ChangeFavouriteColor = ( favouriteColor: string ) => ( {
  type: ChangeFavouriteColorMessage,
  favouriteColor,
} );

export type ChangeFavouriteColorAction = ReturnType<typeof ChangeFavouriteColor>;