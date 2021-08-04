import { Answer } from "../../models/Answer";
import { HardwareType } from "../../models/Hardware";
import { QuestionType } from "../../models/QuestionType";
import { SoftwareType } from "../../models/Software";

const ReadOnlyQuestion = ({ id, text, type, subType, placeHolder, helpText, answer }: { answer?: Answer; subType?: HardwareType | SoftwareType; helpText?: string; placeHolder?: string; id: string; text: string; type: QuestionType; }) => (
    <div></div>
);

export default ReadOnlyQuestion;
