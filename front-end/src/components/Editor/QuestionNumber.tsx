import { useDispatch } from "react-redux";
import { UpdateAnswer } from "../../actions/UpdateAnswerAction";
import { Answer } from "../../models/Answer";

const QuestionNumber = ( { id, answer, placeHolder, helpText }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string } ) => {
  const numberAnswer = ( answer as number ) || "";
  const dispatch = useDispatch();

  return <input type="number" placeholder={ placeHolder } title={ helpText } value={ numberAnswer } onChange={ e => dispatch( UpdateAnswer( id, e.currentTarget.value ) ) } />;
};

export default QuestionNumber;
