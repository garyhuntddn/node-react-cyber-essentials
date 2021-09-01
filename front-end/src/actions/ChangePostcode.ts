export const ChangePostcodeMessage = "ChangePostcodeAction";

export const ChangePostcode = ( postcode: string ) => ( {
  type: ChangePostcodeMessage,
  postcode,
} );

export type ChangePostcodeAction = ReturnType<typeof ChangePostcode>;