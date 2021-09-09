import { useDispatch } from "react-redux";
import { SwitchPanel } from "../actions/SwitchPanel";
import { SelectGroup } from "../actions/SelectGroupAction";
import { UpdateCurrentPassword } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPassword } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPassword } from "../actions/UpdateNewRepeatPasswordAction";
import { PanelConstants, Management } from "../models/Model";
import { ChangeUnusedAddUser } from "../actions/ChangeUnsavedAddUser";
import { AddUserToGroup } from "../actions/AddUserToGroupAction";
import { DeleteUserFromGroup } from "../actions/DeleteUserFromGroupAction";
import { SaveGroupChanges } from "../actions/SaveGroupChangesAction";

const ManagementPanel = (management: Management) => {
  const dispatch = useDispatch();

  const currentGroup = management.selectedGroup === "" ? null : management.groups.filter(m => m.name === management.selectedGroup)[0];

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>

      <div style={{ marginBottom: "15px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.CreateGroup))}>Create Group</button></div>

      <div style={{ border: "solid black 1px", marginBottom: "15px" }}>
        {management.groups.length > 0 &&
          <div style={{ marginBottom: "25px" }}>
            <label>Manage a group
              <select onChange={(e) => { dispatch(SelectGroup(e.currentTarget.value)); }} >
                {management.groups.map(g => <option selected={g.name === management.selectedGroup} key={g.name}>{g.name}</option>)}
              </select>
            </label>
          </div>
        }

        {currentGroup &&
          <div style={{ marginBottom: "25px" }}>
            <p>Manage group: {currentGroup.name}</p>
            {currentGroup.isOwner && <p>You are the owner of this group</p>}
            {currentGroup.users.length === 0 && <p>No additional users in the group</p>}
            {currentGroup.users.length > 0 && <div>
              <p>Other users in this group:</p>
              <ul>
                {currentGroup.users.map(u => <li key={u}>{u} <button onClick={() => dispatch(DeleteUserFromGroup(currentGroup.name, u))} >X</button></li>)}
              </ul>
            </div>}
            <label>Add a user to the group <input type="text" autoComplete="new user" onChange={(e) => dispatch(ChangeUnusedAddUser(e.currentTarget.value))} value={management.unsavedAddUser}></input>
              <button onClick={() => dispatch(AddUserToGroup(currentGroup.name, management.unsavedAddUser))}>Add</button>
            </label>

            <p>
              <button onClick={() => dispatch(SaveGroupChanges({ ...currentGroup }))}>Save changes</button>
            </p>
          </div>
        }
      </div>

      <div style={{ border: "solid black 1px" }}>
        <div style={{ marginBottom: "15px" }}><p>Change Password:</p></div>
        <div style={{ marginBottom: "10px" }}><label>Current Password <input type="password" onChange={(e) => { dispatch(UpdateCurrentPassword(e.currentTarget.value)); }} value={management.currentPassword} /></label></div>
        <div style={{ marginBottom: "10px" }}><label>New Password <input type="password" onChange={(e) => { dispatch(UpdateNewPassword(e.currentTarget.value)); }} value={management.newPassword} /></label></div>
        <div style={{ marginBottom: "25px" }}><label>Repeat new password <input type="password" onChange={(e) => { dispatch(UpdateNewRepeatPassword(e.currentTarget.value)); }} value={management.newRepeatPassword} /></label></div>
      </div>

      <div><label>Delete account?</label></div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch((PanelConstants.Questionnaire))}>Delete account</button></div>

    </div >
  );

}

export default ManagementPanel;
