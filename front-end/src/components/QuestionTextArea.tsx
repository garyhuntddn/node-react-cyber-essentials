const QuestionText = ({ placeHolder, helpText }: { helpText?: string; placeHolder?: string }) => <textarea placeholder={placeHolder} title={helpText} />;

export default QuestionText;
