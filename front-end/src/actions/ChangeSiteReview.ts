export const ChangeSiteReviewMessage = "ChangeSiteReviewAction";

export const ChangeSiteReview = ( siteReview: string ) => ( {
  type: ChangeSiteReviewMessage,
  siteReview,
} );

export type ChangeSiteReviewAction = ReturnType<typeof ChangeSiteReview>;