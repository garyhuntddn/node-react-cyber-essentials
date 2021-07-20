import { QuestionType } from "../models/QuestionType";
import styles from "./Question.module.scss";
import QuestionNumber from "./QuestionNumber";
import QuestionEmail from "./QuestionEmail";
import QuestionText from "./QuestionText";
import QuestionTextArea from "./QuestionTextArea";
import QuestionUrl from "./QuestionUrl";
import QuestionYesNo from "./QuestionYesNo";

// TODO: not yet using the required prop
const Question = ({ id, text, type, placeHolder, helpText }: { helpText?: string; placeHolder?: string; id: string; text: string; required: boolean; type: QuestionType }) => (
  <div className={styles.Question}>
    <span className={styles.id}>{id}</span>
    <label className={styles.text}>{text}</label>
    <div>
      {type === QuestionType.Text && <QuestionText placeHolder={placeHolder} helpText={helpText} />}
      {type === QuestionType.TextArea && <QuestionTextArea />}
      {type === QuestionType.YesNo && <QuestionYesNo id={id} />}
      {type === QuestionType.Url && <QuestionUrl />}
      {type === QuestionType.Number && <QuestionNumber />}
      {type === QuestionType.Email && <QuestionEmail />}
      {type === QuestionType.Url && <QuestionUrl />}
    </div>
  </div>
);

export default Question;
