import { Answer } from "../models/Answer";

const QuestionNumber = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => (
  <input type="number" placeholder={ placeHolder } title={ helpText } />
);

export default QuestionNumber;