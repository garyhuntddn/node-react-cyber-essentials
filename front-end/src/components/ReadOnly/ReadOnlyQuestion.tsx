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
import ReadOnlyQuestionNumber from "./ReadOnlyQuestionNumber";

const ReadOnlyQuestion = ({ id, text, type, subType, answer }: { answer?: Answer; subType?: HardwareType | SoftwareType; id: string; text: string; type: QuestionType }) => (
    <div className={styles.Question}>
        <span className={styles.id}>{id}</span>
        <label className={styles.text}>{text}</label>
        <div>
            {type === QuestionType.Text && <ReadOnlyQuestionText answer={answer} />}
            {type === QuestionType.TextArea && <ReadOnlyQuestionTextArea answer={answer} />}
            {type === QuestionType.YesNo && <ReadOnlyQuestionYesNo answer={answer} />}
            {type === QuestionType.Url && <ReadOnlyQuestionUrl answer={answer} />}
            {type === QuestionType.Number && <ReadOnlyQuestionNumber answer={answer} />}
            {type === QuestionType.Email && <ReadOnlyQuestionEmail answer={answer} />}
            {type === QuestionType.NetworkDeviceList && <ReadOnlyQuestionNetwork answer={answer} />}
            {type === QuestionType.HardwareList && !subType && <strong>Configuration error - a hardware list without a type</strong>}
            {type === QuestionType.SoftwareList && !subType && <strong>Configuration error - a hardware list without a type</strong>}
            {type === QuestionType.HardwareList && subType && <ReadOnlyQuestionHardware type={subType as HardwareType} answer={answer} />}
            {type === QuestionType.SoftwareList && subType && <ReadOnlyQuestionSoftware answer={answer} />}
        </div>
    </div>
);

export default ReadOnlyQuestion;
