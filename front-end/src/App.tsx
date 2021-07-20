import "./App.scss";
import Question from "./components/Question";

const questions = [
  { text: "Our first question", required: true, type: "undefined" },
  { text: "Our fourth question", required: true, type: "undefined" },
  { text: "Our third question", required: true, type: "undefined" },
  { text: "Our fourth question", required: true, type: "undefined" }
];

const App = () =>
(
  <div className="App">
    <header>
      <h1>Cyber Essentials Questionnaire</h1>
    </header>
    <section>
      {
        questions.map( m => <Question text={ m.text } required={ m.required } type={ m.type } /> )
      }
    </section>
  </div>
);

export default App;
