import { Answer } from "../models/Answer";

const QuestionText = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => {
  const stringAnswer = answer as string || "";

  return (
    <input type="text" placeholder={ placeHolder } title={ helpText } value={ stringAnswer } />
  );
};

export default QuestionText;