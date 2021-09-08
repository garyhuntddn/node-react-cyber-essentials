import { useDispatch } from "react-redux";
import { SwitchPanel } from "../actions/SwitchPanel";
import { ToggleGroup } from "../actions/ToggleGroup";
import { Model, PanelConstants } from "../models/Model";

const Management = (model: Model) => {
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ marginBottom: "25px" }}><button onClick={() => dispatch(SwitchPanel(PanelConstants.Questionnaire))}>Back</button></div>
            <div style={ { marginBottom: "25px" } }><label>Groups accessible by you:</label></div>
            <div style={ { marginBottom: "25px" } }>
        <div>What group do you want to manage </div>
        <label>
          <input type="checkbox" checked={ model.management.groups.indexOf( "group1" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group1" ) ); } } />
          Group1
        </label>
        <label>
          <input type="checkbox" checked={ model.management.groups.indexOf( "group2" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group2" ) ); } } />
          Group2
        </label>
        <label>
          <input type="checkbox" checked={ model.management.groups.indexOf( "group3" ) > -1 } onChange={ () => { dispatch( ToggleGroup( "group3" ) ); } } />
          Group3
        </label>
      </div>

        </div>
    );
}

export default Management;
