export const ChangeWorkingHoursMessage = "ChangeWorkingHoursAction";

export const ChangeWorkingHours = ( workingHours: number ) => ( {
  type: ChangeWorkingHoursMessage,
  workingHours,
} );

export type ChangeWorkingHoursAction = ReturnType<typeof ChangeWorkingHours>;