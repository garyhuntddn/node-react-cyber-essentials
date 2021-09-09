import { useDispatch } from "react-redux";
import { CreateGroup } from "../actions/CreateGroupAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { UpdateUnsavedGroupName } from "../actions/UpdateUnsavedGroupNameAction";
import { Model, PanelConstants } from "../models/Model";

const CreateGroupPage = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.ManagementPanel))}>Back</button></div>
      <div><label>Group Name <input type="text" placeholder="Name" onChange={(e) => { dispatch(UpdateUnsavedGroupName(e.currentTarget.value)); }} value={model.unsavedGroupName} /></label></div>
      <div style={{ marginTop: "5px" }}><button onClick={(e) => { dispatch(CreateGroup(model.unsavedGroupName)); dispatch(SwitchPanel(PanelConstants.ManagementPanel)); }}>Create Group </button></div>
    </div>
  );
}

export default CreateGroupPage;