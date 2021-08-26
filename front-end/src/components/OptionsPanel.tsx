import { useDispatch } from "react-redux";
import { SwitchPanel } from "../actions/SwitchPanel";
import { Model, PanelConstants } from "../models/Model";

const OptionsPanel = (model: Model) => {
    const dispatch = useDispatch();
  
    return (
      <div>
        <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
      </div>
    );
  }
  
  export default OptionsPanel;