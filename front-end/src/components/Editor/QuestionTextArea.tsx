import { Answer } from "../../models/Answer";

const QuestionTextArea = ({ updateAnswer, answer, placeHolder, helpText, id }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string; updateAnswer: (id: string, value: Answer) => void }) => {
  const stringAnswer = (answer as string) || "";

  return <textarea rows={5} cols={50} placeholder={placeHolder} title={helpText} value={stringAnswer} onChange={e => updateAnswer(id, e.currentTarget.value)} />;
};

export default QuestionTextArea;
