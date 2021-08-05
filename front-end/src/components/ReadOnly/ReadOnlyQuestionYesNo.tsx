import { Answer } from "../../models/Answer";

const ReadOnlyQuestionYesNo = ( { answer }: { answer?: Answer } ) => {
  return (
    <>
      { answer === true && <span>Yes</span> }
      { answer === false && <span>No</span> }
    </>
  );
};

export default ReadOnlyQuestionYesNo;
