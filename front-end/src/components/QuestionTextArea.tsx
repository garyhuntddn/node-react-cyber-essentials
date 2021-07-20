const QuestionTextArea = ({ placeHolder, helpText }: { helpText?: string; placeHolder?: string }) => <textarea placeholder={placeHolder} title={helpText} />;

export default QuestionTextArea;
