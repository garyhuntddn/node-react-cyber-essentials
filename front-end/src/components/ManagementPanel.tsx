import { useDispatch } from "react-redux";
import { SwitchPanel } from "../actions/SwitchPanel";
import { SelectGroup } from "../actions/SelectGroupAction";
import { UpdateCurrentPassword } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPassword } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPassword } from "../actions/UpdateNewRepeatPasswordAction";
import { PanelConstants, Management } from "../models/Model";

const ManagementPanel = (management: Management) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>

      <div style={{ marginBottom: "15px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.CreateGroup))}>Create Group</button></div>

      <div style={{ border: "solid black 1px", marginBottom: "15px" }}>
        {management.groups.length > 0 &&
          <div style={{ marginBottom: "25px" }}>
            <label htmlFor="None">Manage a group </label>
            <select name="numbers" onChange={(e) => { dispatch(SelectGroup(e.currentTarget.value)); }}>
              {management.groups.map(g => <option key={g}>{g}</option>)}
            </select>
          </div>
        }

        {management.selectedGroup !== "" &&
          <div style={{ marginBottom: "25px" }}>
            <label htmlFor="None">Manage group: {management.selectedGroup}</label>
          </div>
        }
      </div>

      <div style={{ border: "solid black 1px" }}>
        <div style={{ marginBottom: "15px" }}><label>Change Password:</label></div>
        <div style={{ marginBottom: "10px" }}><label>Current Password <input type="text" placeholder="Password1" onChange={(e) => { dispatch(UpdateCurrentPassword(e.currentTarget.value)); }} value={management.currentPassword} /></label></div>
        <div style={{ marginBottom: "10px" }}><label>New Password <input type="text" placeholder="Password123" onChange={(e) => { dispatch(UpdateNewPassword(e.currentTarget.value)); }} value={management.newPassword} /></label></div>
        <div style={{ marginBottom: "25px" }}><label>Repeat new password <input type="text" placeholder="Password123" onChange={(e) => { dispatch(UpdateNewRepeatPassword(e.currentTarget.value)); }} value={management.newRepeatPassword} /></label></div>
      </div>

      <div><label>Delete account?</label></div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch((PanelConstants.Questionnaire))}>Delete account</button></div>

    </div>
  );

}

export default ManagementPanel;
