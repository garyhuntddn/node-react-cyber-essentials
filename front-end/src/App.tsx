import { useState } from "react";
import "./App.scss";
import Question from "./components/Question";
import { Answer } from "./models/Answer";
import { answers } from "./models/answerList";
import { questions } from "./models/questions";

const App = () => {
  const [ answersState, setAnswers ] = useState( answers );

  const updateAnswer = ( id: string, value: Answer ): void => {
    const newAnswers = { ...answersState, [ id ]: value }
    setAnswers( newAnswers );
  };

  return (
    <div className="App">
      <header>
        <h1>Cyber Essentials Questionnaire</h1>
      </header>
      <section>
        { questions.map( m => <Question updateAnswer={ updateAnswer } placeHolder={ m.prompt } helpText={ m.tooltip } id={ m.id } answer={ answersState[ m.id ] } text={ m.question } required={ !!!m.optional } type={ m.type } subType={ m.subType } /> ) }
      </section>
    </div>
  );
};

export default App;
