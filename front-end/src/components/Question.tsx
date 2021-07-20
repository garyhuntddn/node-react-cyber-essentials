import { QuestionType } from "../models/QuestionType";
import styles from "./Question.module.scss";
import QuestionNumber from "./QuestionNumber";
import QuestionEmail from "./QuestionEmail";
import QuestionText from "./QuestionText";
import QuestionTextArea from "./QuestionTextArea";
import QuestionYesNo from "./QuestionYesNo";

// TODO: not yet using the required prop
const Question = ( { id, text, type }: { id: string, text: string, required: boolean, type: QuestionType | "" /* TODO: fix this */ } ) => (
  <div className={ styles.Question }>
    <span className={ styles.id }>{ id }</span>
    <label className={ styles.text }>{ text }</label>
    <div>
      { type === QuestionType.Text && <QuestionText /> }
      { type === QuestionType.TextArea && <QuestionTextArea /> }
      { type === QuestionType.YesNo && <QuestionYesNo id={id} /> }
      { type === QuestionType.Number && <QuestionNumber /> }
      { type === QuestionType.Email && <QuestionEmail /> }
    </div>
  </div>
);

export default Question;