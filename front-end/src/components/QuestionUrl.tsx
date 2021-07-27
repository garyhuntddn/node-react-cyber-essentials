import { Answer } from "../models/Answer";

const QuestionUrl = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => {
  const stringAnswer = answer as string || "";

  return (
    <input type="url" placeholder={ placeHolder } title={ helpText } value={ stringAnswer } />
  );
}

export default QuestionUrl;