
import { Answer } from "../../models/Answer";

const ReadOnlyQuestionNumber = ({ answer, }: { answer?: Answer, }) => {
  const numberAnswer = answer as number || "";

  return (
    <span>{numberAnswer}</span>
  );
};

export default ReadOnlyQuestionNumber;