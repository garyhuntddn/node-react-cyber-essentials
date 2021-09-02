import { ChangeUserName } from "./actions/ChangeUserName";
import { ChangePassword } from "./actions/ChangePasswordAction";
import { ChangeView } from "./actions/ChangeViewAction";
import { UpdateAnswer } from "./actions/UpdateAnswerAction";
import { answers } from "./models/answerList";
import { PanelConstants, ViewConstants } from "./models/Model";
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

const createInitialModel = () => {
  return { answers, view: ViewConstants.Editable, enable2FA: false, workingHours: 0, week: "", favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], townOrVillage: "", backupNumber: "", postcode: "", address2: "", address1: "", employmentStatus: "", mobileNumber: "", color: "", cityOfOrigin: "", email: "", name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false };
};

describe("reducer tests", () => {
  it("should return the initial state", () => {
    expect(Reducers(createInitialModel(), {} as any)).toEqual({ answers, view: ViewConstants.Editable, workingHours: 0, week: "", favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", enable2FA: false, siteReview: "", paymentMethods: [], automobiles: [], townOrVillage: "", backupNumber: "", postcode: "", address2: "", address1: "", employmentStatus: "", mobileNumber: "", color: "", cityOfOrigin: "", email: "", name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false });
  });

  it("should update the view to ReadOnly", () => {
    expect(Reducers(createInitialModel(), ChangeView(ViewConstants.ReadOnly))).toEqual(expect.objectContaining({ view: ViewConstants.ReadOnly }));
  });

  it("should update the view to Editable", () => {
    expect(Reducers({ ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView(ViewConstants.Editable))).toEqual(expect.objectContaining({ view: ViewConstants.Editable }));
  });

  it("should not the change the view to Editable", () => {
    expect(Reducers({ ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView(ViewConstants.ReadOnly))).toEqual(expect.objectContaining({ view: ViewConstants.ReadOnly }));
  });

  it("should not the change the view to ReadOnly", () => {
    expect(Reducers(createInitialModel(), ChangeView(ViewConstants.Editable))).toEqual(expect.objectContaining({ view: ViewConstants.Editable }));
  });

  it("should add an answer for A", () => {
    expect(Reducers(createInitialModel(), UpdateAnswer("A", "some text"))).toEqual(expect.objectContaining({ answers: { A: "some text" } }));
  });

  it("should change the password to 123", () => {
    expect(Reducers(createInitialModel(), ChangePassword("123"))).toEqual(expect.objectContaining({ password: "123" }));
  });

  it("should change the username to luca", () => {
    expect(Reducers(createInitialModel(), ChangeUserName("luca"))).toEqual(expect.objectContaining({ userName: "luca" }));
  });

  it("should change the login result to success", () => {
    expect(Reducers(createInitialModel(), SignInResult(true))).toEqual(expect.objectContaining({ isAuthenticated: true }));
  });

  it("should change the login result to failure", () => {
    expect(Reducers(createInitialModel(), SignInResult(false))).toEqual(expect.objectContaining({ isAuthenticated: false }));
  });

  it("should change the panel to Login", () => {
    expect(Reducers({ ...createInitialModel(), panel: PanelConstants.Questionnaire }, SwitchPanel(PanelConstants.Login))).toEqual(expect.objectContaining({ panel: PanelConstants.Login }));
  });

  it("should switch the panel to FailedLogin", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.FailedLogin))).toEqual(expect.objectContaining({ panel: PanelConstants.FailedLogin }));
  });

  it("should switch the panel to Questionnaire", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.Questionnaire))).toEqual(expect.objectContaining({ panel: PanelConstants.Questionnaire }));
  });

  it("should switch the panel to Options", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.OptionsPanel))).toEqual(expect.objectContaining({ panel: PanelConstants.OptionsPanel }));
  });

  it("should set authentication to false and remove password", () => {
    expect(Reducers({ ...createInitialModel(), userName: "jax", password: "123", isAuthenticated: true, answers: { A: "" } }, SwitchPanel(PanelConstants.Login))).toEqual(expect.objectContaining({ isAuthenticated: false, password: "", answers: {} }));
  });

  it("should update the enable 2FA to true", () => {
    expect(Reducers(createInitialModel(), ChangeEnable2FA(true))).toEqual(expect.objectContaining({ enable2FA: true }));
  });

  it("should update the enable 2FA to false", () => {
    expect(Reducers(createInitialModel(), ChangeEnable2FA(false))).toEqual(expect.objectContaining({ enable2FA: false }));
  });

  it("should set the email to johnsmith@outlook.com", () => {
    expect(Reducers(createInitialModel(), ChangeEmail("johnsmith@outlook.com"))).toEqual(expect.objectContaining({ email: "johnsmith@outlook.com" }));
  });

  it("should update the city of origin to Shanghi", () => {
    expect(Reducers(createInitialModel(), ChangeCityOfOrigin("Shanghi"))).toEqual(expect.objectContaining({ cityOfOrigin: "Shanghi" }));
  });

  it("should update the color to Black", () => {
    expect(Reducers(createInitialModel(), ChangeColor("Black"))).toEqual(expect.objectContaining({ color: "Black" }));
  });

  it("should set the number to 123456789", () => {
    expect(Reducers(createInitialModel(), ChangeMobileNumber("123456789"))).toEqual(expect.objectContaining({ mobileNumber: "123456789" }));
  });

  it("should update the employment status to Full-time", () => {
    expect(Reducers(createInitialModel(), ChangeEmploymentStatus("Full-time"))).toEqual(expect.objectContaining({ employmentStatus: "Full-time" }));
  });

  it("should set the address1 to 17 wallaberoad", () => {
    expect(Reducers(createInitialModel(), ChangeAdress1("17 wallaberoad"))).toEqual(expect.objectContaining({ address1: "17 wallaberoad" }));
  });

  it("should set the address1 to 27 wallaberoad", () => {
    expect(Reducers(createInitialModel(), ChangeAdress2("27 wallaberoad"))).toEqual(expect.objectContaining({ address2: "27 wallaberoad" }));
  });

  it("should set the postcode to CF64CRF", () => {
    expect(Reducers(createInitialModel(), ChangePostcode("CF64CRF"))).toEqual(expect.objectContaining({ postcode: "CF64CRF" }));
  });

  it("should set the backup number to 345678910", () => {
    expect(Reducers(createInitialModel(), ChangeBackupNumber("345678910"))).toEqual(expect.objectContaining({ backupNumber: "345678910" }));
  });

  it("should update the town or village to Penarth", () => {
    expect(Reducers(createInitialModel(), ChangeTownOrVillage("Penarth"))).toEqual(expect.objectContaining({ townOrVillage: "Penarth" }));
  });

  it("should update the automobile to I have a car", () => {
    expect(Reducers(createInitialModel(), ToggleAutomobile("Penarth"))).toEqual(expect.objectContaining({ automobiles: ["Penarth"] }));
  });

  it("should update the payment method to Visa", () => {
    expect(Reducers(createInitialModel(), TogglePaymentMethod("Visa"))).toEqual(expect.objectContaining({ paymentMethods: ["Visa"] }));
  });

  it("should update the site review to Good", () => {
    expect(Reducers(createInitialModel(), ChangeSiteReview("Good"))).toEqual(expect.objectContaining({ siteReview: "Good" }));
  });

  it("should update the birthday to 17/04/2017", () => {
    expect(Reducers(createInitialModel(), ChangeBirthday("17/04/2017"))).toEqual(expect.objectContaining({ birthday: "17/04/2017" }));
  });

  it("should update the submit date to 17/04/2017 17:30", () => {
    expect(Reducers(createInitialModel(), ChangeSubmitDate("17/04/2017 17:30"))).toEqual(expect.objectContaining({ submitDate: "17/04/2017 17:30" }));
  });

  it("should update the favourite color to Blue", () => {
    expect(Reducers(createInitialModel(), ChangeFavouriteColor("Blue"))).toEqual(expect.objectContaining({ favouriteColor: "Blue" }));
  });

  it("should update the favourite month to January 2017", () => {
    expect(Reducers(createInitialModel(), ChangeFavouriteMonth("January 2017"))).toEqual(expect.objectContaining({ favouriteMonth: "January 2017" }));
  });

  it("should update the week to 2", () => {
    expect(Reducers(createInitialModel(), ChangeWeek("2"))).toEqual(expect.objectContaining({ week: "2" }));
  });

  it("should update the working hours to 15", () => {
    expect(Reducers(createInitialModel(), ChangeWorkingHours(15))).toEqual(expect.objectContaining({ workingHours: 15 }));
  });
});
