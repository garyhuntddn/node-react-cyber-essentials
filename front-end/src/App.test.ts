import { ChangeUserName } from "./actions/ChangeUserName";
import { ChangePassword } from "./actions/ChangePasswordAction";
import { ChangeView } from "./actions/ChangeViewAction";
import { UpdateAnswer } from "./actions/UpdateAnswerAction";
import { answers } from "./models/answerList";
import { Model, Options, PanelConstants, ViewConstants } from "./models/Model";
import Reducers from "./reducers/Reducers";
import { SignInResult } from "./actions/SignInResultAction";
import { SwitchPanel } from "./actions/SwitchPanel";
import { ChangeEmail } from "./actions/ChangeEmailAction";
import { ChangeEnable2FA } from "./actions/ChangeEnable2FAAction";
import { ChangeCityOfOrigin } from "./actions/ChangeCityOfOriginAction";
import { ChangeColor } from "./actions/ChangeColorAction";
import { ChangeMobileNumber } from "./actions/ChangeMobileNumber";
import { ChangeEmploymentStatus } from "./actions/ChangeEmploymentStatus";
import { ChangeAdress1 } from "./actions/ChangeAddress1";
import { ChangeAdress2 } from "./actions/ChangeAddress2";
import { ChangePostcode } from "./actions/ChangePostcode";
import { ChangeBackupNumber } from "./actions/ChangeBackupNumber";
import { ChangeTownOrVillage } from "./actions/ChangeTownOrVillageAction";
import { ToggleAutomobile } from "./actions/ToggleAutomobile";
import { TogglePaymentMethod } from "./actions/TogglePaymentMethod";
import { ChangeSiteReview } from "./actions/ChangeSiteReview";
import { ChangeBirthday } from "./actions/ChangeBirthdayAction";
import { ChangeSubmitDate } from "./actions/ChangeSubmitDateAction";
import { ChangeFavouriteColor } from "./actions/ChangeFavouriteColor";
import { ChangeFavouriteMonth } from "./actions/ChangeFavouriteMonthAction";
import { ChangeWeek } from "./actions/ChangeWeekAction";
import { ChangeWorkingHours } from "./actions/ChangeWorkingHours";

export type RecursivePartial<T> = {
  [ P in keyof T ]?: RecursivePartial<T[ P ]>;
};

const createInitialModel = (): Model => {
  return { answers, view: ViewConstants.Editable, name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false, options: { enable2FA: false, cityOfOrigin: "", townOrVillage: "", backupNumber: "", mobileNumber: "", color: "", employmentStatus: "", favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], postcode: "", address2: "", address1: "", workingHours: 0, week: "", email: "" } };
};

describe( "reducer tests", () => {
  it( "should return the initial state", () => {
    expect( Reducers( createInitialModel(), {} as any ) ).toEqual<Model>( { answers, view: ViewConstants.Editable, name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false, options: { enable2FA: false, cityOfOrigin: "", townOrVillage: "", backupNumber: "", mobileNumber: "", color: "", employmentStatus: "", favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], postcode: "", address2: "", address1: "", workingHours: 0, week: "", email: "" } } );
  } );

  it( "should update the view to ReadOnly", () => {
    expect( Reducers( createInitialModel(), ChangeView( ViewConstants.ReadOnly ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { view: ViewConstants.ReadOnly } ) );
  } );

  it( "should update the view to Editable", () => {
    expect( Reducers( { ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.Editable ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { view: ViewConstants.Editable } ) );
  } );

  it( "should not the change the view to Editable", () => {
    expect( Reducers( { ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView( ViewConstants.ReadOnly ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { view: ViewConstants.ReadOnly } ) );
  } );

  it( "should not the change the view to ReadOnly", () => {
    expect( Reducers( createInitialModel(), ChangeView( ViewConstants.Editable ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { view: ViewConstants.Editable } ) );
  } );

  it( "should add an answer for A", () => {
    expect( Reducers( createInitialModel(), UpdateAnswer( "A", "some text" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { answers: { A: "some text" } } ) );
  } );

  it( "should change the password to 123", () => {
    expect( Reducers( createInitialModel(), ChangePassword( "123" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { password: "123" } ) );
  } );

  it( "should change the username to luca", () => {
    expect( Reducers( createInitialModel(), ChangeUserName( "luca" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { userName: "luca" } ) );
  } );

  it( "should change the login result to success", () => {
    expect( Reducers( createInitialModel(), SignInResult( true ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { isAuthenticated: true } ) );
  } );

  it( "should change the login result to failure", () => {
    expect( Reducers( createInitialModel(), SignInResult( false ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { isAuthenticated: false } ) );
  } );

  it( "should change the panel to Login", () => {
    expect( Reducers( { ...createInitialModel(), panel: PanelConstants.Questionnaire }, SwitchPanel( PanelConstants.Login ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { panel: PanelConstants.Login } ) );
  } );

  it( "should switch the panel to FailedLogin", () => {
    expect( Reducers( createInitialModel(), SwitchPanel( PanelConstants.FailedLogin ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { panel: PanelConstants.FailedLogin } ) );
  } );

  it( "should switch the panel to Questionnaire", () => {
    expect( Reducers( createInitialModel(), SwitchPanel( PanelConstants.Questionnaire ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { panel: PanelConstants.Questionnaire } ) );
  } );

  it( "should switch the panel to Options", () => {
    expect( Reducers( createInitialModel(), SwitchPanel( PanelConstants.OptionsPanel ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { panel: PanelConstants.OptionsPanel } ) );
  } );

  it( "should set authentication to false and remove password", () => {
    expect( Reducers( { ...createInitialModel(), userName: "jax", password: "123", isAuthenticated: true, answers: { A: "" } }, SwitchPanel( PanelConstants.Login ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { isAuthenticated: false, password: "", answers: {} } ) );
  } );

  it( "should update the enable 2FA to true", () => {
    expect( Reducers( createInitialModel(), ChangeEnable2FA( true ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { enable2FA: true } ) } ) );
  } );

  it( "should update the enable 2FA to false", () => {
    expect( Reducers( createInitialModel(), ChangeEnable2FA( false ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { enable2FA: false } ) } ) );
  } );

  it( "should set the email to johnsmith@outlook.com", () => {
    expect( Reducers( createInitialModel(), ChangeEmail( "johnsmith@outlook.com" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { email: "johnsmith@outlook.com" } ) } ) );
  } );

  it( "should update the city of origin to Shanghi", () => {
    expect( Reducers( createInitialModel(), ChangeCityOfOrigin( "Shanghi" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { cityOfOrigin: "Shanghi" } ) } ) );
  } );

  it( "should update the color to Black", () => {
    expect( Reducers( createInitialModel(), ChangeColor( "Black" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { color: "Black" } ) } ) );
  } );

  it( "should set the number to 123456789", () => {
    expect( Reducers( createInitialModel(), ChangeMobileNumber( "123456789" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { mobileNumber: "123456789" } ) } ) );
  } );

  it( "should update the employment status to Full-time", () => {
    expect( Reducers( createInitialModel(), ChangeEmploymentStatus( "Full-time" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { employmentStatus: "Full-time" } ) } ) );
  } );

  it( "should set the address1 to 17 wallaberoad", () => {
    expect( Reducers( createInitialModel(), ChangeAdress1( "17 wallaberoad" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { address1: "17 wallaberoad" } ) } ) );
  } );

  it( "should set the address1 to 27 wallaberoad", () => {
    expect( Reducers( createInitialModel(), ChangeAdress2( "27 wallaberoad" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { address2: "27 wallaberoad" } ) } ) );
  } );

  it( "should set the postcode to CF64CRF", () => {
    expect( Reducers( createInitialModel(), ChangePostcode( "CF64CRF" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { postcode: "CF64CRF" } ) } ) );
  } );

  it( "should set the backup number to 345678910", () => {
    expect( Reducers( createInitialModel(), ChangeBackupNumber( "345678910" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { backupNumber: "345678910" } ) } ) );
  } );

  it( "should update the town or village to Penarth", () => {
    expect( Reducers( createInitialModel(), ChangeTownOrVillage( "Penarth" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { townOrVillage: "Penarth" } ) } ) );
  } );

  it( "should update the automobile to I have a car", () => {
    expect( Reducers( createInitialModel(), ToggleAutomobile( "Penarth" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { automobiles: [ "Penarth" ] } ) } ) );
  } );

  it( "should update the payment method to Visa", () => {
    expect( Reducers( createInitialModel(), TogglePaymentMethod( "Visa" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { paymentMethods: [ "Visa" ] } ) } ) );
  } );

  it( "should update the site review to Good", () => {
    expect( Reducers( createInitialModel(), ChangeSiteReview( "Good" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { siteReview: "Good" } ) } ) );
  } );

  it( "should update the birthday to 17/04/2017", () => {
    expect( Reducers( createInitialModel(), ChangeBirthday( "17/04/2017" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { birthday: "17/04/2017" } ) } ) );
  } );

  it( "should update the submit date to 17/04/2017 17:30", () => {
    expect( Reducers( createInitialModel(), ChangeSubmitDate( "17/04/2017 17:30" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { submitDate: "17/04/2017 17:30" } ) } ) );
  } );

  it( "should update the favourite color to Blue", () => {
    expect( Reducers( createInitialModel(), ChangeFavouriteColor( "Blue" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { favouriteColor: "Blue" } ) } ) );
  } );

  it( "should update the favourite month to January 2017", () => {
    expect( Reducers( createInitialModel(), ChangeFavouriteMonth( "January 2017" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { favouriteMonth: "January 2017" } ) } ) );
  } );

  it( "should update the week to 2", () => {
    expect( Reducers( createInitialModel(), ChangeWeek( "2" ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { week: "2" } ) } ) );
  } );

  it( "should update the working hours to 15", () => {
    expect( Reducers( createInitialModel(), ChangeWorkingHours( 15 ) ) ).toEqual( expect.objectContaining<RecursivePartial<Model>>( { options: expect.objectContaining<Partial<Options>>( { workingHours: 15 } ) } ) );
  } );
} );
