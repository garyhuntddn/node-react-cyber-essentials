import { Answer } from "../models/Answer";

const QuestionYesNo = ({ answer, id, placeHolder, helpText }: { answer?: Answer; id: string; helpText?: string; placeHolder?: string }) => {
  const name = `selection_${id}`;

  return (
    <>
      <label>
        <input type="radio" checked={answer === true} name={name} placeholder={placeHolder} title={helpText} />
        Yes
      </label>
      <label>
        <input type="radio" checked={answer === false} name={name} placeholder={placeHolder} title={helpText} />
        No
      </label>
    </>
  );
};

export default QuestionYesNo;
