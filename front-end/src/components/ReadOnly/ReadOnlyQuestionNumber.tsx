
import { Answer } from "../../models/Answer";

const ReadOnlyQuestionNumber = ( {  answer, }: { id: string, answer?: Answer, helpText?: string, } ) => {
  const numberAnswer = answer as number || "";

  return (
    <input type="number" value={ numberAnswer }  />
  );
};

export default ReadOnlyQuestionNumber;