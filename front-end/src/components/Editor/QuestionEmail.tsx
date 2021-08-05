import { Answer } from "../../models/Answer";

const QuestionEmail = ( { id, updateAnswer, answer, placeHolder, helpText }: { id: string, answer?: Answer, helpText?: string, placeHolder?: string, updateAnswer: ( id: string, value: Answer ) => void } ) => {
  const stringAnswer = answer as string || "";

  return (
    <input type="email" placeholder={ placeHolder } title={ helpText } value={ stringAnswer } onChange={ e => updateAnswer( id, e.currentTarget.value ) } />
  );
};

export default QuestionEmail;