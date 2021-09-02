export const ChangeBirthdayMessage = "ChangeBirthdayAction";

export const ChangeBirthday = ( birthday: string ) => ( {
  type: ChangeBirthdayMessage,
  birthday,
} );

export type ChangeBirthdayAction = ReturnType<typeof ChangeBirthday>;