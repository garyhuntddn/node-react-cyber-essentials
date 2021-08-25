import { useDispatch } from "react-redux";
import { CreateGroup } from "../actions/CreateGroupAction";
import { Model } from "../models/Model";

const CreateGroupPage = ( model: Model ) => {
    const dispatch = useDispatch();
  
    return (
      <div>
        <div><label>Change group <input type="text" placeholder="Email" onChange={ ( e ) => { dispatch( CreateGroup( e.currentTarget.value ) ); } } value={ model.name } /></label></div>
        <div></div>
        <div></div>
      </div>
    );  
}

export default CreateGroupPage;