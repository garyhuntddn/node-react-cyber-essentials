type QuestionTextProps = {
  helpText?: string,
  placeHolder?: string
}

const QuestionText = ( props: QuestionTextProps ) => (
  <input type="text" placeholder={ props.placeHolder } title={ props.helpText } />
)

export default QuestionText;