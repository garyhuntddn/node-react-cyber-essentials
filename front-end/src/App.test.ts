import { ChangeUserName } from "./actions/ChangeUserName";
import { ChangePassword } from "./actions/ChangePasswordAction";
import { ChangeView } from "./actions/ChangeViewAction";
import { UpdateAnswer } from "./actions/UpdateAnswerAction";
import { answers } from "./models/answerList";
import { PanelConstants, ViewConstants } from "./models/Model";
import Reducers from "./reducers/Reducers";
import { SignInResult } from "./actions/SignInResultAction";
import { SwitchPanel } from "./actions/SwitchPanel";

const createInitialModel = () => {
  return { answers, view: ViewConstants.Editable, group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false };
}

describe( "reducer tests", () => {
  it( "should return the initial state", () => {

    expect( Reducers( createInitialModel(), {} as any ) ).toEqual( { answers, view: ViewConstants.Editable, group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false } );
  } );

  it( "should update the view to ReadOnly", () => {
    expect( Reducers( createInitialModel(), ChangeView( ViewConstants.ReadOnly ) ) ).toHaveProperty( "view", ViewConstants.ReadOnly );
  } );

  it( "should update the view to Editable", () => {
    expect( Reducers( { ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.Editable ) ) ).toHaveProperty( "view", ViewConstants.Editable );
  } );

  it( "should not the change the view to Editable", () => {
    expect( Reducers( { ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.ReadOnly ) ) ).toHaveProperty( "view", ViewConstants.ReadOnly );
  } );

  it( "should not the change the view to ReadOnly", () => {
    expect( Reducers( createInitialModel(), ChangeView( ViewConstants.Editable ) ) ).toHaveProperty( "view", ViewConstants.Editable );
  } );

  it( "should add an answer for A", () => {
    expect( Reducers( createInitialModel(), UpdateAnswer( "A", "some text" ) ) ).toHaveProperty( "answers.A", "some text" );
  } );

  it( "should change the password to 123", () => {
    expect( Reducers( createInitialModel(), ChangePassword( "123" ) ) ).toHaveProperty( "password", "123" );
  } );

  it( "should change the username to luca", () => {
    expect( Reducers( createInitialModel(), ChangeUserName( "luca" ) ) ).toHaveProperty( "userName", "luca" );
  } );

  it( "should change the login result to success", () => {
    expect( Reducers( createInitialModel(), SignInResult( true ) ) ).toHaveProperty( "isAuthenticated", true );
  } );

  it( "should change the login result to failure", () => {
    expect( Reducers( createInitialModel(), SignInResult( false ) ) ).toHaveProperty( "isAuthenticated", false );
  } );

  it( "should change the panel to Login", () => {
    expect( Reducers( { ...createInitialModel(), panel: PanelConstants.Questionnaire }, SwitchPanel( PanelConstants.Login ) ) ).toHaveProperty( "panel", PanelConstants.Login );
  } );

  it( "should change the login result to FailedLogin", () => {
    expect( Reducers( createInitialModel(), SwitchPanel( PanelConstants.FailedLogin ) ) ).toHaveProperty( "panel", PanelConstants.FailedLogin );
  } );

  it( "should change the login result to Questionnaire", () => {
    expect( Reducers( createInitialModel(), SwitchPanel( PanelConstants.Questionnaire ) ) ).toHaveProperty( "panel", PanelConstants.Questionnaire );
  } );
} );
