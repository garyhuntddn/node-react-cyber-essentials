const QuestionEmail = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
    <input type="email" placeholder={ placeHolder } title={ helpText } />
  )
  
  export default QuestionEmail;