import { QuestionType } from "../models/QuestionType";

type QuestionProps = {
  text: string,
  required: boolean,
  type: QuestionType | "" // TODO: fix this
}

const Question = ( props: QuestionProps ) => (
  <div>
    <label>{ props.text }</label>
  </div>
);

export default Question;