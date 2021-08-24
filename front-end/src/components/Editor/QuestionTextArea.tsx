import { useDispatch } from "react-redux";
import { UpdateAnswer } from "../../actions/UpdateAnswerAction";
import { Answer } from "../../models/Answer";

const QuestionTextArea = ( { answer, placeHolder, helpText, id }: { id: string; answer?: Answer; helpText?: string; placeHolder?: string; } ) => {
  const stringAnswer = ( answer as string ) || "";
  const dispatch = useDispatch();

  return <textarea rows={ 5 } cols={ 50 } placeholder={ placeHolder } title={ helpText } value={ stringAnswer } onChange={ e => dispatch( UpdateAnswer( id, e.currentTarget.value ) ) } />;
};

export default QuestionTextArea;
