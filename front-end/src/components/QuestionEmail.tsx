import { Answer } from "../models/Answer";

const QuestionEmail = ( { answer, placeHolder, helpText }: { answer?: Answer, helpText?: string, placeHolder?: string } ) => (
  <input type="email" placeholder={ placeHolder } title={ helpText } />
);

export default QuestionEmail;