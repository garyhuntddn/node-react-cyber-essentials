import { useDispatch } from "react-redux";
import { UpdateAnswer } from "../../actions/UpdateAnswerAction";
import { Answer } from "../../models/Answer";

const QuestionYesNo = ({ answer, id, placeHolder, helpText }: { answer?: Answer; id: string; helpText?: string; placeHolder?: string; }) => {
  const name = `selection_${id}`;
  const dispatch = useDispatch();

  return (
    <>
      <label>
        <input type="radio" checked={answer === true} name={name} placeholder={placeHolder} title={helpText} onChange={e => dispatch(UpdateAnswer(id, e.currentTarget.checked))} />
        Yes
      </label>
      <label>
        <input type="radio" checked={answer === false} name={name} placeholder={placeHolder} title={helpText} onChange={e => dispatch(UpdateAnswer(id, !e.currentTarget.checked))} />
        No
      </label>
    </>
  );
};

export default QuestionYesNo;
