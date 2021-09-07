export const ChangeWeekMessage = "ChangeWeekAction";

export const ChangeWeek = ( week: string) => ({
  type: ChangeWeekMessage,
  week,
});

export type ChangeWeekAction = ReturnType<typeof ChangeWeek>;
