import { useDispatch } from "react-redux";
import { ChangeView } from "../actions/ChangeViewAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { Model, PanelConstants, ViewConstants } from "../models/Model";
import { questions } from "../models/questions";
import Question from "./Editor/Question";
import ReadOnlyQuestion from "./ReadOnly/ReadOnlyQuestion";

const Questionnaire = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>

        <div style={{ marginBottom: "15px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.OptionsPanel))}>Options</button></div>
        <div style={{ position: "fixed", right: "0", top: "0", marginRight: "1vw", marginTop: "1vw" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Login))}>Logout</button></div>
        <div style={{ marginBottom: "15px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.CreateGroup))}>Create Group</button></div>
        <div style={{ marginBottom: "15px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Management))}>Management</button></div>

      </div>

      <div>
        <label>
          <input type="radio" checked={model.view === ViewConstants.Editable} radioGroup="view" onChange={() => { dispatch(ChangeView(ViewConstants.Editable)); }} />
          Editor
        </label>
        <label>
          <input type="radio" checked={model.view === ViewConstants.ReadOnly} radioGroup="view" onChange={() => { dispatch(ChangeView(ViewConstants.ReadOnly)); }} />
          Viewer
        </label>
      </div>
      {model.view === ViewConstants.Editable && questions.map(m => <Question key={m.id} placeHolder={m.prompt} helpText={m.tooltip} id={m.id} answer={model.answers[m.id]} text={m.question} required={!!!m.optional} type={m.type} subType={m.subType} />)}
      {model.view === ViewConstants.ReadOnly && questions.map(m => <ReadOnlyQuestion key={m.id} id={m.id} answer={model.answers[m.id]} text={m.question} type={m.type} subType={m.subType} />)}
    </>
  );
}

export default Questionnaire;