export const ChangeEmploymentStatusMessage = "ChangeEmploymentStatusAction";

export const ChangeEmploymentStatus = ( employmentStatus: string ) => ( {
  type: ChangeEmploymentStatusMessage,
  employmentStatus,
} );

export type ChangeEmploymentStatusAction = ReturnType<typeof ChangeEmploymentStatus>;