import { useDispatch } from "react-redux";
import { UpdateAnswer } from "../../actions/UpdateAnswerAction";
import { Answer } from "../../models/Answer";

const QuestionEmail = ( { id, answer, placeHolder, helpText }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string } ) => {
  const stringAnswer = ( answer as string ) || "";
  const dispatch = useDispatch();

  return <input type="email" placeholder={ placeHolder } title={ helpText } value={ stringAnswer } onChange={ e => dispatch( UpdateAnswer( id, e.currentTarget.value ) ) } />;
};

export default QuestionEmail;
