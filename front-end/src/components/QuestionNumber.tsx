
import { Answer } from "../models/Answer";

const QuestionNumber = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => {
  const numberAnswer = answer as number || "";

  return (
    <input type="number" placeholder={ placeHolder } title={ helpText }  value={ numberAnswer }/>
  );
};

export default QuestionNumber;