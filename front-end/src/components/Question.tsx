import { QuestionType } from "../models/QuestionType";
import styles from "./Question.module.scss";
import QuestionText from "./QuestionText";

// TODO: not yet using the required prop
const Question = ( { id, text, type }: { id: string, text: string, required: boolean, type: QuestionType | "" /* TODO: fix this */ } ) => (
  <div className={ styles.Question }>
    <span className={ styles.id }>{ id }</span>
    <label className={ styles.text }>{ text }</label>
    <div>
      { type === QuestionType.Text && <QuestionText /> }
    </div>
  </div>
);

export default Question;