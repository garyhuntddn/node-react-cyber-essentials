import { useDispatch, useStore } from "react-redux";
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
import { ResetOptions } from "../actions/ResetOptions";
import { SaveOptions } from "../actions/SaveOptions";
import { SwitchPanel } from "../actions/SwitchPanel";
import { ToggleAutomobile } from "../actions/ToggleAutomobile";
import { TogglePaymentMethod } from "../actions/TogglePaymentMethod";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Model, Options, PanelConstants, PaymentMethodConstants, VehicleConstants } from "../models/Model";

const OptionsPanel = ( options: Options ) => {
  const dispatch = useDispatch();
  const model = useStore<Model>().getState();

  return (
    <div>
      <div style={ { marginBottom: "25px" } }><button onClick={ () => dispatch( SwitchPanel( PanelConstants.Questionnaire ) ) }>Back</button></div>

      <div style={ { marginBottom: "25px" } }><label>Email Address <input type="text" placeholder="johnsmith@outlook.com" onChange={ ( e ) => { dispatch( ChangeEmail( e.currentTarget.value ) ); } } value={ options.email } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Address line 1 <input type="text" placeholder="19 coswell road" onChange={ ( e ) => { dispatch( ChangeAdress1( e.currentTarget.value ) ); } } value={ options.address1 } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Adress line 2 <input type="text" placeholder="27 wallabe avenue" onChange={ ( e ) => { dispatch( ChangeAdress2( e.currentTarget.value ) ); } } value={ options.address2 } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Postcode <input type="text" placeholder="CN54 TUZ" onChange={ ( e ) => { dispatch( ChangePostcode( e.currentTarget.value ) ); } } value={ options.postcode } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Enable 2FA</div>
        <label>
          <input type="radio" checked={ options.enable2FA === true } radioGroup="YesNo" onChange={ () => { dispatch( ChangeEnable2FA( true ) ); } } />
          Yes
        </label>
        <label>
          <input type="radio" checked={ options.enable2FA === false } radioGroup="YesNo" onChange={ () => { dispatch( ChangeEnable2FA( false ) ); } } />
          No
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <label htmlFor="None">City of Origin </label>
        <select name="numbers" value={ options.cityOfOrigin } onChange={ ( e ) => { dispatch( ChangeCityOfOrigin( e.currentTarget.value as CityOfOriginConstants ) ); } }>
          <option value={ CityOfOriginConstants.London }>London</option>
          <option value={ CityOfOriginConstants.NewYork }>New York</option>
          <option value={ CityOfOriginConstants.Shanghi }>Shanghi</option>
          <option value={ CityOfOriginConstants.Tokyo }>Tokyo</option>
          <option value={ CityOfOriginConstants.LosAngeles }>Los Angeles</option>
        </select>
      </div>

      <div style={ { marginBottom: "25px" } }><label>Town/ village <input type="text" placeholder="Penarth" onChange={ ( e ) => { dispatch( ChangeTownOrVillage( e.currentTarget.value ) ); } } value={ options.townOrVillage } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Page Colour</div>
        <label>
          <input type="radio" checked={ options.color === ColorConstants.Red } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( ColorConstants.Red ) ); } } />
          Red
        </label>
        <label>
          <input type="radio" checked={ options.color === ColorConstants.Black } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( ColorConstants.Black ) ); } } />
          Black
        </label>
        <label>
          <input type="radio" checked={ options.color === ColorConstants.Blue } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( ColorConstants.Blue ) ); } } />
          Blue
        </label>
        <label>
          <input type="radio" checked={ options.color === ColorConstants.Green } radioGroup="Colors" onChange={ () => { dispatch( ChangeColor( ColorConstants.Green ) ); } } />
          Green
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }><label>Mobile Number <input type="tel" onChange={ ( e ) => { dispatch( ChangeMobileNumber( e.currentTarget.value ) ); } } value={ options.mobileNumber } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Backup Number <input type="tel" onChange={ ( e ) => { dispatch( ChangeBackupNumber( e.currentTarget.value ) ); } } value={ options.backupNumber } /></label></div>

      <div style={ { marginBottom: "25px" } }>
        <div>Employment status </div>
        <label>
          <input type="radio" checked={ options.employmentStatus === EmploymentStatusConstants.FullTime } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( EmploymentStatusConstants.FullTime ) ); } } />
          Full-time
        </label>
        <label>
          <input type="radio" checked={ options.employmentStatus === EmploymentStatusConstants.PartTime } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( EmploymentStatusConstants.PartTime ) ); } } />
          Part-time
        </label>
        <label>
          <input type="radio" checked={ options.employmentStatus === EmploymentStatusConstants.TemporaryEmployment } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( EmploymentStatusConstants.TemporaryEmployment ) ); } } />
          Temporary employment
        </label>
        <label>
          <input type="radio" checked={ options.employmentStatus === EmploymentStatusConstants.Unemployed } radioGroup="EmploymentStatus" onChange={ () => { dispatch( ChangeEmploymentStatus( EmploymentStatusConstants.Unemployed ) ); } } />
          Unemployed
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>What do you travel to work with </div>
        <label>
          <input type="checkbox" checked={ options.automobiles.indexOf( VehicleConstants.vehicle1 ) > -1 } onChange={ () => { dispatch( ToggleAutomobile( VehicleConstants.vehicle1 ) ); } } />
          I have a Bike
        </label>
        <label>
          <input type="checkbox" checked={ options.automobiles.indexOf( VehicleConstants.vehicle2 ) > -1 } onChange={ () => { dispatch( ToggleAutomobile( VehicleConstants.vehicle2 ) ); } } />
          I have a car
        </label>
        <label>
          <input type="checkbox" checked={ options.automobiles.indexOf( VehicleConstants.vehicle3 ) > -1 } onChange={ () => { dispatch( ToggleAutomobile( VehicleConstants.vehicle3 ) ); } } />
          I have a boat
        </label>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>Prefered payment method </div>
        <select value={ options.paymentMethods } name="list_box_name" size={ 3 } multiple={ true } onChange={ ( e ) => {
          const existing = [ ...options.paymentMethods ];
          const updatedOptions = e.currentTarget.options;
          for ( let i = 0; i < e.currentTarget.options.length; i++ ) {
            const value = updatedOptions[ i ].value as PaymentMethodConstants;
            const wasSelected = existing.indexOf( value ) > -1;
            const isSelected = updatedOptions[ i ].selected;
            if ( isSelected === wasSelected ) continue;
            dispatch( TogglePaymentMethod( value ) );
          }
        } } >
          <option value={ PaymentMethodConstants.Visa }>Visa</option>
          <option value={ PaymentMethodConstants.Mastercard }>Mastercard</option>
          <option value={ PaymentMethodConstants.Paypal }>Paypal</option>
        </select>
      </div>

      <div style={ { marginBottom: "25px" } }>
        <div>Customer site review </div>
        <textarea rows={ 5 } cols={ 50 } onChange={ ( e ) => dispatch( ChangeSiteReview( e.currentTarget.value ) ) } value={ options.siteReview } />
      </div>

      <div style={ { marginBottom: "25px" } }><label>Birthday (optional)<input type="date" onChange={ ( e ) => { dispatch( ChangeBirthday( e.currentTarget.value ) ); } } value={ options.birthday } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Finish date and submit time (optional)<input type="datetime-local" onChange={ ( e ) => { dispatch( ChangeSubmitDate( e.currentTarget.value ) ); } } value={ options.submitDate } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Favourite color <input type="color" onChange={ ( e ) => { dispatch( ChangeFavouriteColor( e.currentTarget.value ) ); } } value={ options.favouriteColor } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>Favourite month <input type="month" onChange={ ( e ) => { dispatch( ChangeFavouriteMonth( e.currentTarget.value ) ); } } value={ options.favouriteMonth } /></label></div>

      <div style={ { marginBottom: "25px" } }><label>working hours <input type="range" onChange={ ( e ) => { dispatch( ChangeWorkingHours( e.currentTarget.valueAsNumber ) ); } } value={ options.workingHours } /></label></div>

      <div>
        <button style={ { marginRight: "25px" } } onClick={ () => dispatch( ResetOptions( { ...model.options } ) ) }>Reset</button>
        <button onClick={ () => dispatch( SaveOptions( options ) ) }>Save</button>
      </div>
    </div>
  );
}

export default OptionsPanel;
