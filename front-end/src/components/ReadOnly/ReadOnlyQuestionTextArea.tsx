import { Answer } from "../../models/Answer";

const ReadOnlyQuestionTextArea = ({ answer }: { answer?: Answer }) => {
    const stringAnswer = answer as string || "";

    return (
        <span>{stringAnswer}</span>
    );
};

export default ReadOnlyQuestionTextArea;