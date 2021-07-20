type QuestionProps = {
  text: string,
  required: boolean,
  type: string
}

const Question = ( props: QuestionProps ) => (
  <div>
    <label>{ props.text }</label>
  </div>
);

export default Question;