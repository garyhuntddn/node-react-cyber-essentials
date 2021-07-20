const QuestionText = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
  <input type="text" placeholder={ placeHolder } title={ helpText } />
)

export default QuestionText;