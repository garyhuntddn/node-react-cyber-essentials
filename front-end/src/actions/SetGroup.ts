export const SetGroupMessage = "SetGroupAction";

export const SetGroup = ( group: string ) => ( {
  type: SetGroupMessage,
  group
} );

export type SetGroupAction = ReturnType<typeof SetGroup>;