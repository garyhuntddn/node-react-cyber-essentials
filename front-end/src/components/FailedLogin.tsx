import { useDispatch } from "react-redux"
import { SwitchPanel } from "../actions/SwitchPanel";
import { PanelConstants } from "../models/Model";

const FailedLogin = () => {
  const dispatch = useDispatch();

  return <div>Incorrect login details - <button onClick={ () => dispatch( SwitchPanel( PanelConstants.Login ) ) }>try again</button></div>
}

export default FailedLogin;