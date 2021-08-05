export const DeleteRowAnswerMessage = "DeleteRowAnswerAction";

export const DeleteRowAnswer = ( id: string, index: number ) => ( {
  type: DeleteRowAnswerMessage,
  id,
  index
} );

export type DeleteRowAnswerAction = ReturnType<typeof DeleteRowAnswer>;