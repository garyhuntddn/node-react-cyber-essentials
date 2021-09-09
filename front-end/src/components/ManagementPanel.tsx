import { useDispatch } from "react-redux";
import { SwitchPanel } from "../actions/SwitchPanel";
import { ToggleGroup } from "../actions/ToggleGroup";
import { UpdateCurrentPassword } from "../actions/UpdateCurrentPasswordAction";
import { UpdateNewPassword } from "../actions/UpdateNewPasswordAction";
import { UpdateNewRepeatPassword } from "../actions/UpdateNewRepeatPasswordAction";
import { PanelConstants, Management } from "../models/Model";

const ManagementPanel = (management: Management) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
            <div style={ { marginBottom: "25px" } }><label>Groups accessible by you:</label></div>
            <div style={ { marginBottom: "25px" } }>
        <div>What group do you want to manage </div>
        <label>
          <input type="checkbox" checked={ management.groups.indexOf( "group1" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group1" ) ); } } />
          Group1
        </label>
        <label>
          <input type="checkbox" checked={ management.groups.indexOf( "group2" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group2" ) ); } } />
          Group2
        </label>
        <label>
          <input type="checkbox" checked={ management.groups.indexOf( "group3" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group3" ) ); } } />
          Group3
        </label>
      </div>

      <div style={ { marginBottom: "15px" } }><label>Change Password:</label></div>
      <div style={ { marginBottom: "10px" } }><label>Current Password <input type="text" placeholder="Password1" onChange={ ( e ) => { dispatch( UpdateCurrentPassword( e.currentTarget.value ) ); } } value={ management.currentPassword } /></label></div>
      <div style={ { marginBottom: "10px" } }><label>New Password <input type="text" placeholder="Password123" onChange={ ( e ) => { dispatch( UpdateNewPassword( e.currentTarget.value ) ); } } value={ management.newPassword } /></label></div>
      <div style={ { marginBottom: "25px" } }><label>Repeat new password <input type="text" placeholder="Password123" onChange={ ( e ) => { dispatch( UpdateNewRepeatPassword( e.currentTarget.value ) ); } } value={ management.newRepeatPassword }/></label></div>

      <div><label>Delete account?</label></div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch((PanelConstants.Questionnaire))}>Delete account</button></div>

        </div>
    );
}

export default ManagementPanel;
