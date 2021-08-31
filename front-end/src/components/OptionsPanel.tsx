import { useDispatch } from "react-redux";
import { ChangeEmail } from "../actions/ChangeEmailAction";
import { Enable2FA } from "../actions/Enable2FAAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { Model, PanelConstants } from "../models/Model";

const OptionsPanel = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
      <div><label>Email Address <input type="text" placeholder="johnsmith@outlook.com" onChange={ ( e ) => { dispatch( ChangeEmail( e.currentTarget.value ) ); } } value={ model.email }/></label></div>
      <div>Enable 2FA</div>
      <div>
        <label>
          <input type="radio" checked={model.enable2FA === true} radioGroup="YesNo" onChange={() => { dispatch(Enable2FA(true)); }} />
          Yes
        </label>
        <label>
          <input type="radio" checked={model.enable2FA === false} radioGroup="YesNo" onChange={() => { dispatch(Enable2FA(false)); }} />
          No
        </label>
      </div>

      <div><label htmlFor="None">City of Origin</label></div>

      <select name="numbers" id="numbers">
        <option value="1">London</option>
        <option value="2">New York</option>
        <option value="3">Shanghi</option>
        <option value="4">Tokyo</option>
        <option value="5">Los Angeles</option>

      </select>
    </div>
  );
}

export default OptionsPanel;