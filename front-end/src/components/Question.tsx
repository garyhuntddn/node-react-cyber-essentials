import { QuestionType } from "../models/QuestionType";
import styles from "./Question.module.scss";
import QuestionNumber from "./QuestionNumber";
import QuestionEmail from "./QuestionEmail";
import QuestionText from "./QuestionText";
import QuestionTextArea from "./QuestionTextArea";
import QuestionUrl from "./QuestionUrl";
import QuestionYesNo from "./QuestionYesNo";
import QuestionNetwork from "./QuestionNetwork";
import QuestionHardware from "./QuestionHardware";
import QuestionSoftware from "./QuestionSoftware";

// TODO: not yet using the required prop
const Question = ( { id, text, type, placeHolder, helpText }: { helpText?: string; placeHolder?: string; id: string; text: string; required: boolean; type: QuestionType } ) => (
  <div className={ styles.Question }>
    <span className={ styles.id }>{ id }</span>
    <label className={ styles.text }>{ text }</label>
    <div>
      { type === QuestionType.Text && <QuestionText placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.TextArea && <QuestionTextArea placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.YesNo && <QuestionYesNo id={ id } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Url && <QuestionUrl placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Number && <QuestionNumber placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Email && <QuestionEmail placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Url && <QuestionUrl placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.NetworkDeviceList && <QuestionNetwork placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.HardwareList && <QuestionHardware placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.SoftwareList && <QuestionSoftware placeHolder={ placeHolder } helpText={ helpText } /> }
    </div>
  </div>
);

export default Question;
