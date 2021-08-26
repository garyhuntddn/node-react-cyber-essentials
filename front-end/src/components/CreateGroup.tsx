import { useDispatch } from "react-redux";
import { CreateGroup } from "../actions/CreateGroupAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { Model, PanelConstants } from "../models/Model";

const CreateGroupPage = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
      <div><label>Create group <input type="text" placeholder="Name" onChange={(e) => { dispatch(CreateGroup(e.currentTarget.value)); }} value={model.name} /></label></div>
      <div style={{ marginTop: "5px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.CreateGroup))}>Create Group</button></div>
    </div>
  );
}

export default CreateGroupPage;