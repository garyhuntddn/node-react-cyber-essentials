const QuestionUrl = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
  <input type="url" placeholder={ placeHolder } title={ helpText } />
)

export default QuestionUrl;