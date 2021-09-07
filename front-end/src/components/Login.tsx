import { useDispatch } from "react-redux";
import { ChangePassword } from "../actions/ChangePasswordAction";
import { ChangeUserName } from "../actions/ChangeUserName";
import { SignIn } from "../actions/SignInAction";
import { Model } from "../models/Model";

const Login = ( model: Model ) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div><label>Username <input type="text" placeholder="Username" onChange={ ( e ) => { dispatch( ChangeUserName( e.currentTarget.value ) ); } } onKeyUp={ ( e ) => { if ( e.key === "Enter" ) dispatch( SignIn() ); } } value={ model.userName } /></label></div>
      <div><label> Password <input type="password" placeholder="Password" id="password" onChange={ e => dispatch( ChangePassword( e.currentTarget.value ) ) } onKeyUp={ ( e ) => { if ( e.key === "Enter" ) dispatch( SignIn() ); } } value={ model.password } /></label></div>
      <div><button onClick={ () => dispatch( SignIn() ) }>Sign in</button></div>
    </div>
  );
}

export default Login;