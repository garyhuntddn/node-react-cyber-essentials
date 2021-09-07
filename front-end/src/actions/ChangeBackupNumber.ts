export const ChangeBackupNumberMessage = "ChangeBackupNumberAction";

export const ChangeBackupNumber = ( backup: string ) => ( {
  type: ChangeBackupNumberMessage,
  backup,
} );

export type ChangeBackupNumberAction = ReturnType<typeof ChangeBackupNumber>;