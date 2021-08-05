import { Answer } from "../../models/Answer";
import { HardwareType } from "../../models/Hardware";
import { QuestionType } from "../../models/QuestionType";
import { SoftwareType } from "../../models/Software";
import styles from "./ReadOnlyQuestion.module.scss";
import ReadOnlyQuestionEmail from "./ReadOnlyQuestionEmail";
import ReadOnlyQuestionHardware from "./ReadOnlyQuestionHardware";
import ReadOnlyQuestionText from "./ReadOnlyQuestionText";
import ReadOnlyQuestionTextArea from "./ReadOnlyQuestionTextArea";
import ReadOnlyQuestionUrl from "./ReadOnlyQuestionUrl";
import ReadOnlyQuestionNetwork from "./ReadOnlyQuestionNetwork";
import ReadOnlyQuestionSoftware from "./ReadOnlyQuestionSoftware";
import ReadOnlyQuestionYesNo from "./ReadOnlyQuestionYesNo";

const ReadOnlyQuestion = ({ id, text, type, subType, placeHolder, helpText, answer }: { answer?: Answer; subType?: HardwareType | SoftwareType; helpText?: string; placeHolder?: string; id: string; text: string; type: QuestionType }) => (
    <div className={styles.Question}>
        <span className={styles.id}>{id}</span>
        <label className={styles.text}>{text}</label>
        <div>
            {type === QuestionType.Text && <ReadOnlyQuestionText answer={answer} />}
            {type === QuestionType.TextArea && <ReadOnlyQuestionTextArea answer={answer} />}
            {type === QuestionType.YesNo && <ReadOnlyQuestionYesNo id={id} answer={answer} placeHolder={placeHolder} helpText={helpText} />}
            {type === QuestionType.Url && <ReadOnlyQuestionUrl answer={answer} />}
            {type === QuestionType.Number /* && <ReadOnlyQuestionNumber id={id} updateAnswer={updateAnswer} answer={answer} placeHolder={placeHolder} helpText={helpText} />*/}
            {type === QuestionType.Email && <ReadOnlyQuestionEmail answer={answer} />}
            {type === QuestionType.NetworkDeviceList && <ReadOnlyQuestionNetwork id={id} answer={answer} placeHolder={placeHolder} helpText={helpText} />}
            {type === QuestionType.HardwareList && !subType && <strong>Configuration error - a hardware list without a type</strong>}
            {type === QuestionType.SoftwareList && !subType && <strong>Configuration error - a hardware list without a type</strong>}
            {type === QuestionType.HardwareList && subType /*&& <ReadOnlyQuestionHardware id={id} updateRowAnswer={updateRowAnswer} deleteRowAnswer={deleteRowAnswer} addRowAnswer={addRowAnswer} answer={answer} type={subType as HardwareType} placeHolder={placeHolder} helpText={helpText} />*/}
            {type === QuestionType.SoftwareList && subType && <ReadOnlyQuestionSoftware answer={answer} />}
        </div>
    </div>
);

export default ReadOnlyQuestion;
