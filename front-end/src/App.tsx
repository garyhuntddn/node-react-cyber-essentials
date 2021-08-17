import "./App.scss";
import { Action } from "redux";
import Question from "./components/Editor/Question";
import ReadOnlyQuestion from "./components/ReadOnly/ReadOnlyQuestion";
import { questions } from "./models/questions";
import { connect, useDispatch } from "react-redux";
import { Model, ViewConstants } from "./models/Model";
import { ChangeView } from "./actions/ChangeViewAction";
import { ChangePassword } from "./actions/ChangePasswordAction";

const mapStateToProps = (state: Model) => {
  return state;
};

const mapDispatchToProps = (dispatch: (action: Action) => unknown) => ({});

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const App = (model: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header>
        <h1>Cyber Essentials Questionnaire</h1>
        <div>
          <input type="text" placeholder="Username"></input> <br />
          <input type="password" placeholder="Password" id="password" onChange={e =>
            dispatch(ChangePassword(e.currentTarget.value))} />
        </div>
      </header>
      <section>
        <div>
          <label>
            <input
              type="radio"
              checked={model.view === ViewConstants.Editable}
              radioGroup="view"
              onChange={() => {
                dispatch(ChangeView(ViewConstants.Editable));
              }}
            />
            Editor
          </label>
          <label>
            <input
              type="radio"
              checked={model.view === ViewConstants.ReadOnly}
              radioGroup="view"
              onChange={() => {
                dispatch(ChangeView(ViewConstants.ReadOnly));
              }}
            />
            Viewer
          </label>
        </div>
        {model.view === ViewConstants.Editable && questions.map(m => <Question key={m.id} placeHolder={m.prompt} helpText={m.tooltip} id={m.id} answer={model.answers[m.id]} text={m.question} required={!!!m.optional} type={m.type} subType={m.subType} />)}
        {model.view === ViewConstants.ReadOnly && questions.map(m => <ReadOnlyQuestion key={m.id} id={m.id} answer={model.answers[m.id]} text={m.question} type={m.type} subType={m.subType} />)}
      </section>
    </div >
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
