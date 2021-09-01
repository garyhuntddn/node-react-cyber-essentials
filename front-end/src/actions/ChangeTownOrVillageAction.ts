export const ChangeTownOrVillageMessage = "ChangeTownOrVillageAction";

export const ChangeTownOrVillage = ( townOrVillage: string ) => ( {
  type: ChangeTownOrVillageMessage,
  townOrVillage,
} );

export type ChangeTownOrVillageAction = ReturnType<typeof ChangeTownOrVillage>;