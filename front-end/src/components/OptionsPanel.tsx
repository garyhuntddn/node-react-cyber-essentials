import { useDispatch } from "react-redux";
import { ChangeAdress1 } from "../actions/ChangeAddress1";
import { ChangeAdress2 } from "../actions/ChangeAddress2";
import { ChangeBackupNumber } from "../actions/ChangeBackupNumber";
import { ChangeCityOfOrigin } from "../actions/ChangeCityOfOriginAction";
import { ChangeColor } from "../actions/ChangeColorAction";
import { ChangeEmail } from "../actions/ChangeEmailAction";
import { ChangeEmploymentStatus } from "../actions/ChangeEmploymentStatus";
import { ChangeEnable2FA } from "../actions/ChangeEnable2FAAction";
import { ChangeMobileNumber } from "../actions/ChangeMobileNumber";
import { ChangePostcode } from "../actions/ChangePostcode";
import { ChangeTownOrVillage } from "../actions/ChangeTownOrVillageAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { ToggleAutomobile } from "../actions/ToggleAutomobile";
import { Model, PanelConstants } from "../models/Model";

const OptionsPanel = (model: Model) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
      <div style={{ marginBottom: "25px" }}><label>Email Address <input type="text" placeholder="johnsmith@outlook.com" onChange={(e) => { dispatch(ChangeEmail(e.currentTarget.value)); }} value={model.email} /></label></div>
      <div style={{ marginBottom: "25px" }}><label>Address line 1 <input type="text" placeholder="19 coswell road" onChange={(e) => { dispatch(ChangeAdress1(e.currentTarget.value)); }} value={model.address1} /></label></div>
      <div style={{ marginBottom: "25px" }}><label>Adress line 2 <input type="text" placeholder="27 wallabe avenue" onChange={(e) => { dispatch(ChangeAdress2(e.currentTarget.value)); }} value={model.address2} /></label></div>
      <div style={{ marginBottom: "25px" }}><label>Postcode <input type="text" placeholder="CN54 TUZ" onChange={(e) => { dispatch(ChangePostcode(e.currentTarget.value)); }} value={model.postcode} /></label></div>

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
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Shanghi">Shanghi</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>
      <div style={{ marginBottom: "25px" }}><label>Town/ village <input type="text" placeholder="Penarth" onChange={(e) => { dispatch(ChangeTownOrVillage(e.currentTarget.value)); }} value={model.townOrVillage} /></label></div>

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
      <div style={{ marginBottom: "25px" }}><label>Mobile Number <input type="number" onChange={(e) => { dispatch(ChangeMobileNumber(e.currentTarget.value)); }} value={model.mobileNumber} /></label></div>
      <div style={{ marginBottom: "25px" }}><label>Backup Number <input type="number" onChange={(e) => { dispatch(ChangeBackupNumber(e.currentTarget.value)); }} value={model.backupNumber} /></label></div>

      <div style={{ marginBottom: "25px" }}>
        <div>Employment status </div>
        <label>
          <input type="radio" checked={model.employmentStatus === "Full-time"} radioGroup="EmploymentStatus" onChange={() => { dispatch(ChangeEmploymentStatus("Full-time")); }} />
          Full-time
        </label>
        <label>
          <input type="radio" checked={model.employmentStatus === "Part-time"} radioGroup="EmploymentStatus" onChange={() => { dispatch(ChangeEmploymentStatus("Part-time")); }} />
          Part-time
        </label>
        <label>
          <input type="radio" checked={model.employmentStatus === "Temporary employement"} radioGroup="EmploymentStatus" onChange={() => { dispatch(ChangeEmploymentStatus("Temporary employment")); }} />
          Temporary employment
        </label>
        <label>
          <input type="radio" checked={model.employmentStatus === "Unemployed"} radioGroup="EmploymentStatus" onChange={() => { dispatch(ChangeEmploymentStatus("Unemployed")); }} />
          Unemployed
        </label>
      </div>
      <div style={{ marginBottom: "25px" }}>

      <div>What do you travel to work with </div>
        <label>
          <input type="checkbox" checked={model.automobile === "vehicle1"} name="vehicle1" value="Bike" onChange={() => { dispatch(ToggleAutomobile("vehicle1")); }}/>
          I have a Bike
        </label>
        <label>
          <input type="checkbox" checked={model.automobile === "vehicle2"} name="vehicle2" value="Car" onChange={() => { dispatch(ToggleAutomobile("vehicle2")); }}/>
          I have a car
        </label>
        <label>
          <input type="checkbox" checked={model.automobile === "vehicle3"} name="vehicle3" value="Boat" onChange={() => { dispatch(ToggleAutomobile("vehicle3")); }}/>
          I have a boat
        </label>
      </div>
    </div>
  );
}

export default OptionsPanel;