export const ChangeSubmitDateMessage = "ChangeSubmitDateAction";

export const ChangeSubmitDate = ( submitDate: string ) => ( {
  type: ChangeSubmitDateMessage,
  submitDate,
} );

export type ChangeSubmitDateAction = ReturnType<typeof ChangeSubmitDate>;