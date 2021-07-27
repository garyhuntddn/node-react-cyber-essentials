import "./App.scss";
import Question from "./components/Question";
import { questions } from "./models/questions";

const App = () =>
(
  <div className="App">
    <header>
      <h1>Cyber Essentials Questionnaire</h1>
    </header>
    <section>
      {
        questions.map( m => <Question placeHolder={ m.prompt } helpText={ m.tooltip } id={ m.id } text={ m.question } required={ !!!m.optional } type={ m.type } subType={ m.subType } /> )
      }
    </section>
  </div>
);

export default App;
