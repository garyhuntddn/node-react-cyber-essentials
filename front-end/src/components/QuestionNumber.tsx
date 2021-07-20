const QuestionNumber = ( { placeHolder, helpText }: { helpText?: string, placeHolder?: string } ) => (
  <input type="number" placeholder={ placeHolder } title={ helpText } />
);

export default QuestionNumber;