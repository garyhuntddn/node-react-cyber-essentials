export const UpdateUnsavedGroupNameMessage = "UpdateUnsavedGroupNameAction";

export const UpdateUnsavedGroupName = ( unsavedGroupName: string ) => ( {
  type: UpdateUnsavedGroupNameMessage,
  unsavedGroupName
} );

export type UpdateUnsavedGroupNameAction = ReturnType<typeof UpdateUnsavedGroupName>;