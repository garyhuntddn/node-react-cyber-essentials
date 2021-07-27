import { Answer } from "../models/Answer";

const QuestionEmail = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => {
  const stringAnswer = answer as string || "";

  return (
    <input type="email" placeholder={ placeHolder } title={ helpText } value={ stringAnswer } />
  );
};

export default QuestionEmail;