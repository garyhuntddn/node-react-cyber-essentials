const QuestionText = ({ id, placeHolder, helpText }: { id: string; helpText?: string; placeHolder?: string }) => {
  const name = `selection_${id}`;

  return (
    <>
      <label>
        <input type="radio" name={name} placeholder={placeHolder} title={helpText} />
        Yes
      </label>
      <label>
        <input type="radio" name={name} placeholder={placeHolder} title={helpText} />
        No
      </label>
    </>
  );
};

export default QuestionText;
