import { Answer } from "../../models/Answer";

const ReadOnlyQuestionEmail = ( { answer }: { answer?: Answer } ) => {
  const stringAnswer = answer as string || "";

  return (
    <span>{ stringAnswer }</span>
  );
};

export default ReadOnlyQuestionEmail;