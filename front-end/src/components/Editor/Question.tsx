import { QuestionType } from "../../models/QuestionType";
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
import { HardwareType } from "../../models/Hardware";
import { SoftwareType } from "../../models/Software";
import { Answer } from "../../models/Answer";

const Question = ( { id, text, type, subType, placeHolder, helpText, answer }: { answer?: Answer; subType?: HardwareType | SoftwareType; helpText?: string; placeHolder?: string; id: string; text: string; required: boolean; type: QuestionType /*updateAnswer: ( id: string, value: Answer ) => void; updateRowAnswer: ( id: string, index: number, value: Network | Hardware | Software ) => void; deleteRowAnswer: ( id: string, index: number ) => void; addRowAnswer: ( id: string, answer: Network | Software | Hardware ) => void*/ } ) => (
  <div className={ styles.Question }>
    <span className={ styles.id }>{ id }</span>
    <label className={ styles.text }>{ text }</label>
    <div>
      { type === QuestionType.Text && <QuestionText id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.TextArea && <QuestionTextArea id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.YesNo && <QuestionYesNo id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Url && <QuestionUrl id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Number && <QuestionNumber id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.Email && <QuestionEmail id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.NetworkDeviceList && <QuestionNetwork id={ id } answer={ answer } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.HardwareList && !subType && <strong>Configuration error - a hardware list without a type</strong> }
      { type === QuestionType.SoftwareList && !subType && <strong>Configuration error - a hardware list without a type</strong> }
      { type === QuestionType.HardwareList && subType && <QuestionHardware id={ id } answer={ answer } type={ subType as HardwareType } placeHolder={ placeHolder } helpText={ helpText } /> }
      { type === QuestionType.SoftwareList && subType && <QuestionSoftware id={ id } answer={ answer } type={ subType as SoftwareType } placeHolder={ placeHolder } helpText={ helpText } /> }
    </div>
  </div>
);

export default Question;
