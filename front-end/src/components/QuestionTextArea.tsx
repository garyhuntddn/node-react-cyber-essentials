import { Answer } from "../models/Answer";

const QuestionTextArea = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string; placeHolder?: string } ) => {
  const stringAnswer = answer as string || "";

  return (
    <textarea rows={ 5 } cols={ 50 } placeholder={ placeHolder } title={ helpText } value={ stringAnswer } />
  );
};

export default QuestionTextArea;
