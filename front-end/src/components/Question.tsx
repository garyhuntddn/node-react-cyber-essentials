import { QuestionType } from "../models/QuestionType";
import styles from "./Question.module.scss";
import QuestionText from "./QuestionText";

type QuestionProps = {
  id: string,
  text: string,
  required: boolean,
  type: QuestionType | "" // TODO: fix this
}

const Question = ( props: QuestionProps ) => (
  <div className={ styles.Question }>
    <span className={ styles.id }>{ props.id }</span>
    <label className={ styles.text }>{ props.text }</label>
    <div>
      { props.type === QuestionType.Text && <QuestionText /> }
    </div>
  </div>
);

export default Question;