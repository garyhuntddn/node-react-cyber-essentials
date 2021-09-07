import { useDispatch } from "react-redux";
import { ChangeAdress1 } from "../actions/ChangeAddress1";
import { ChangeAdress2 } from "../actions/ChangeAddress2";
import { ChangeBackupNumber } from "../actions/ChangeBackupNumber";
import { ChangeBirthday } from "../actions/ChangeBirthdayAction";
import { ChangeCityOfOrigin } from "../actions/ChangeCityOfOriginAction";
import { ChangeColor } from "../actions/ChangeColorAction";
import { ChangeEmail } from "../actions/ChangeEmailAction";
import { ChangeEmploymentStatus } from "../actions/ChangeEmploymentStatus";
import { ChangeEnable2FA } from "../actions/ChangeEnable2FAAction";
import { ChangeFavouriteColor } from "../actions/ChangeFavouriteColor";
import { ChangeFavouriteMonth } from "../actions/ChangeFavouriteMonthAction";
import { ChangeMobileNumber } from "../actions/ChangeMobileNumber";
import { ChangePostcode } from "../actions/ChangePostcode";
import { ChangeSiteReview } from "../actions/ChangeSiteReview";
import { ChangeSubmitDate } from "../actions/ChangeSubmitDateAction";
import { ChangeTownOrVillage } from "../actions/ChangeTownOrVillageAction";
import { ChangeWorkingHours } from "../actions/ChangeWorkingHours";
import { SwitchPanel } from "../actions/SwitchPanel";
import { ToggleAutomobile } from "../actions/ToggleAutomobile";
import { TogglePaymentMethod } from "../actions/TogglePaymentMethod";
import { Model, PanelConstants } from "../models/Model";

const OptionsPanel = ( model: Model ) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={ { marginBottom: "25px" } }><button onClick={ () => dispatch( SwitchPanel( PanelConstants.Questionnaire ) ) }>Back</button></div>

      <div style={ { marginBottom: "25px" } }><label>Email Address <input type="text" placeholder="johnsmith@outlook.com" onChange={ ( e ) => { dispatch( ChangeEmail( e.currentTarget.value ) ); } } value={ model.email } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Address line 1 <input type="text" placeholder="19 coswell road" onChange={ ( e ) => { dispatch( ChangeAdress1( e.currentTarget.value ) ); } } value={ model.address1 } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Adress line 2 <input type="text" placeholder="27 wallabe avenue" onChange={ ( e ) => { dispatch( ChangeAdress2( e.currentTarget.value ) ); } } value={ model.address2 } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Postcode <input type="text" placeholder="CN54 TUZ" onChange={ ( e ) => { dispatch( ChangePostcode( e.currentTarget.value ) ); } } value={ model.postcode } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Enable 2FA</div>
        <label>
          <input type="radio" checked={ model.options.enable2FA === true } radioGroup="YesNo" onChange={ () => { dispatch( ChangeEnable2FA( true ) ); } } />
          Yes
        </label>
        <label>
          <input type="radio" checked={ model.options.enable2FA === false } radioGroup="YesNo" onChange={ () => { dispatch( ChangeEnable2FA( false ) ); } } />
          No
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <label htmlFor="None">City of Origin </label>
        <select name="numbers" value={ model.options.cityOfOrigin } onChange={ ( e ) => { dispatch( ChangeCityOfOrigin( e.currentTarget.value ) ); } }>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Shanghi">Shanghi</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>

      <div style={ { marginBottom: "25px" } }><label>Town/ village <input type="text" placeholder="Penarth" onChange={ ( e ) => { dispatch( ChangeTownOrVillage( e.currentTarget.value ) ); } } value={ model.options.townOrVillage } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Page Colour</div>
        <label>
          <input type="radio" checked={ model.options.color === "Red" } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( "Red" ) ); } } />
          Red
        </label>
        <label>
          <input type="radio" checked={ model.options.color === "Black" } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( "Black" ) ); } } />
          Black
        </label>
        <label>
          <input type="radio" checked={ model.options.color === "Blue" } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( "Blue" ) ); } } />
          Blue
        </label>
        <label>
          <input type="radio" checked={ model.options.color === "Green" } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( "Green" ) ); } } />
          Green
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }><label>Mobile Number <input type="tel" onChange={ ( e ) => { dispatch( ChangeMobileNumber( e.currentTarget.value ) ); } } value={ model.options.mobileNumber } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Backup Number <input type="tel" onChange={ ( e ) => { dispatch( ChangeBackupNumber( e.currentTarget.value ) ); } } value={ model.options.backupNumber } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Employment status </div>
        <label>
          <input type="radio" checked={ model.options.employmentStatus === "Full-time" } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( "Full-time" ) ); } } />
          Full-time
        </label>
        <label>
          <input type="radio" checked={ model.options.employmentStatus === "Part-time" } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( "Part-time" ) ); } } />
          Part-time
        </label>
        <label>
          <input type="radio" checked={ model.options.employmentStatus === "Temporary employement" } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( "Temporary employment" ) ); } } />
          Temporary employment
        </label>
        <label>
          <input type="radio" checked={ model.options.employmentStatus === "Unemployed" } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( "Unemployed" ) ); } } />
          Unemployed
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>What do you travel to work with </div>
        <label>
          <input type="checkbox" checked={ model.automobiles.indexOf( "vehicle1" ) > -1 } name="vehicle1" value="Bike" onChange={ () => { dispatch( ToggleAutomobile( "vehicle1" ) ); } } />
          I have a Bike
        </label>
        <label>
          <input type="checkbox" checked={ model.automobiles.indexOf( "vehicle2" ) > -1 } name="vehicle2" value="Car" onChange={ () => { dispatch( ToggleAutomobile( "vehicle2" ) ); } } />
          I have a car
        </label>
        <label>
          <input type="checkbox" checked={ model.automobiles.indexOf( "vehicle3" ) > -1 } name="vehicle3" value="Boat" onChange={ () => { dispatch( ToggleAutomobile( "vehicle3" ) ); } } />
          I have a boat
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>Prefered payment method </div>
        <select value={ model.paymentMethods } name="list_box_name" size={ 3 } multiple={ true } onChange={ ( e ) => {
          const existing = [ ...model.paymentMethods ];
          const options = e.currentTarget.options;
          for ( let i = 0; i < e.currentTarget.options.length; i++ ) {
            const value = options[ i ].value;
            const wasSelected = existing.indexOf( value ) > -1;
            const isSelected = options[ i ].selected;
            if ( isSelected === wasSelected ) continue;
            dispatch( TogglePaymentMethod( value ) );
          }
        } } >
          <option value="Visa">
            Visa
          </option>
          <option value="Mastercard">
            Mastercard
          </option>
          <option value="Paypal">
            Paypal
          </option>
          ...
        </select>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>Customer site review </div>
        <textarea rows={ 5 } cols={ 50 } onChange={ ( e ) => dispatch( ChangeSiteReview( e.currentTarget.value ) ) } value={ model.siteReview } />
      </div>

      <div style={ { marginBottom: "25px" } }><label>Birthday (optional)<input type="date" onChange={ ( e ) => { dispatch( ChangeBirthday( e.currentTarget.value ) ); } } value={ model.birthday } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Finish date and submit time (optional)<input type="datetime-local" onChange={ ( e ) => { dispatch( ChangeSubmitDate( e.currentTarget.value ) ); } } value={ model.submitDate } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Favourite color <input type="color" onChange={ ( e ) => { dispatch( ChangeFavouriteColor( e.currentTarget.value ) ); } } value={ model.favouriteColor } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Favourite month <input type="month" onChange={ ( e ) => { dispatch( ChangeFavouriteMonth( e.currentTarget.value ) ); } } value={ model.favouriteMonth } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>working hours <input type="range" onChange={ ( e ) => { dispatch( ChangeWorkingHours( e.currentTarget.valueAsNumber ) ); } } value={ model.workingHours } /></label></div>
    </div>
  );
}

export default OptionsPanel;