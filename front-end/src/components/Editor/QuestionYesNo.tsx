import { Answer } from "../../models/Answer";

const QuestionYesNo = ( { /*updateAnswer,*/ answer, id, placeHolder, helpText }: { answer?: Answer; id: string; helpText?: string; placeHolder?: string; /*updateAnswer: ( id: string, value: Answer ) => void*/ } ) => {
  const name = `selection_${ id }`;

  return (
    <>
      <label>
        <input type="radio" checked={ answer === true } name={ name } placeholder={ placeHolder } title={ helpText } onChange={ e => /* updateAnswer( id, e.currentTarget.checked ) /* {} } />
        Yes
      </label>
      <label>
        <input type="radio" checked={ answer === false } name={ name } placeholder={ placeHolder } title={ helpText } onChange={ e => /* updateAnswer( id, !e.currentTarget.checked ) */ { } } />
        No
      </label>
    </>
  );
};

export default QuestionYesNo;
