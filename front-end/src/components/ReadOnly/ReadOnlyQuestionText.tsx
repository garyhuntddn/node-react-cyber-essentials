import { Answer } from "../../models/Answer";

const ReadOnlyQuestionText = ({ answer }: { answer?: Answer }) => {
  const stringAnswer = answer as string || "";

  return (
    <span>{stringAnswer}</span>
  );
};

export default ReadOnlyQuestionText;