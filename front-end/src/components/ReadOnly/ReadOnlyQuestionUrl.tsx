import { Answer } from "../../models/Answer";

const ReadOnlyQuestionUrl = ({ answer }: { answer?: Answer }) => {
    const stringAnswer = answer as string || "";

    return (
        <span>{stringAnswer}</span>
    );
};

export default ReadOnlyQuestionUrl;