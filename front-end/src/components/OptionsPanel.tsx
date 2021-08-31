import { useDispatch } from "react-redux";
import { ChangeCityOfOrigin } from "../actions/ChangeCityOfOriginAction";
import { ChangeColor } from "../actions/ChangeColorAction";
import { ChangeEmail } from "../actions/ChangeEmailAction";
import { ChangeEnable2FA } from "../actions/ChangeEnable2FAAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { Model, PanelConstants } from "../models/Model";

const OptionsPanel = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
      <div style={{ marginBottom: "25px" }}><label> Email Address <input type="text" placeholder="johnsmith@outlook.com" onChange={(e) => { dispatch(ChangeEmail(e.currentTarget.value)); }} value={model.email} /></label></div>

      <div style={{ marginBottom: "25px" }}>
        <div>Enable 2FA</div>
        <label>
          <input type="radio" checked={model.enable2FA === true} radioGroup="YesNo" onChange={() => { dispatch(ChangeEnable2FA(true)); }} />
          Yes
        </label>
        <label>
          <input type="radio" checked={model.enable2FA === false} radioGroup="YesNo" onChange={() => { dispatch(ChangeEnable2FA(false)); }} />
          No
        </label>
      </div>

      <div style={{ marginBottom: "25px" }}>
        <label htmlFor="None">City of Origin </label>
        <select name="numbers" value={model.cityOfOrigin} onChange={(e) => { dispatch(ChangeCityOfOrigin(e.currentTarget.value)); }}>
          <option value="1">London</option>
          <option value="2">New York</option>
          <option value="3">Shanghi</option>
          <option value="4">Tokyo</option>
          <option value="5">Los Angeles</option>
        </select>
      </div>


      <div style={{ marginBottom: "25px" }}>
        <div>Page Colour</div>
        <label>
          <input type="radio" checked={model.color === "Red"} radioGroup="Colors" onChange={() => { dispatch(ChangeColor("Red")); }} />
          Red
        </label>
        <label>
          <input type="radio" checked={model.color === "Black"} radioGroup="Colors" onChange={() => { dispatch(ChangeColor("Black")); }} />
          Black
        </label>
        <label>
          <input type="radio" checked={model.color === "Blue"} radioGroup="Colors" onChange={() => { dispatch(ChangeColor("Blue")); }} />
          Blue
        </label>
        <label>
          <input type="radio" checked={model.color === "Green"} radioGroup="Colors" onChange={() => { dispatch(ChangeColor("Green")); }} />
          Green
        </label>
      </div>
    </div>
  );
}

export default OptionsPanel;