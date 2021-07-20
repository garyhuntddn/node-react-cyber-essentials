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
        questions.map( m => <Question text={ m.question } required={ !!!m.optional } type={ m.type } /> )
      }
    </section>
  </div>
);

export default App;
