
import { Answer } from "../../models/Answer";

const QuestionNumber = ( { id, updateAnswer, answer, placeHolder, helpText }: { id: string, answer?: Answer, helpText?: string, placeHolder?: string, updateAnswer: ( id: string, value: Answer ) => void } ) => {
  const numberAnswer = answer as number || "";

  return (
    <input type="number" placeholder={ placeHolder } title={ helpText } value={ numberAnswer } onChange={ e => updateAnswer( id, e.currentTarget.value ) } />
  );
};

export default QuestionNumber;