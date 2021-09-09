import { ChangeUserName } from "../actions/ChangeUserName";
import { ChangePassword } from "../actions/ChangePasswordAction";
import { ChangeView } from "../actions/ChangeViewAction";
import { UpdateAnswer } from "../actions/UpdateAnswerAction";
import { answers } from "../models/answerList";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Model, PanelConstants, PaymentMethodConstants, VehicleConstants, ViewConstants } from "../models/Model";
import Reducers from "../reducers/Reducers";
import { SignInResult } from "../actions/SignInResultAction";
import { SwitchPanel } from "../actions/SwitchPanel";
import { UpdateUnsavedGroupName } from "../actions/UpdateUnsavedGroupNameAction";
import { SelectGroup } from "../actions/SelectGroupAction";
import { ChangeUnusedAddUser } from "../actions/ChangeUnsavedAddUser";
import { AddUserToGroup } from "../actions/AddUserToGroupAction";
import { DeleteUserFromGroup } from "../actions/DeleteUserFromGroupAction";
import { createInitialModel } from "./TestHelpers";
import { RecursivePartial } from "./RecursivePartial";

describe("model reducer tests", () => {
  it("should return the initial state", () => {
    expect(Reducers(createInitialModel(), {} as any)).toEqual<Model>({
      answers,
      view: ViewConstants.Editable,
      name: "",
      group: "",
      password: "",
      management: { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "", selectedGroup: "", unsavedAddUser: "" },
      userName: "",
      unsavedGroupName: "",
      panel: PanelConstants.Login,
      isAuthenticated: false,
      options: { enable2FA: false, cityOfOrigin: CityOfOriginConstants.Empty, townOrVillage: "", backupNumber: "", mobileNumber: "", color: ColorConstants.Empty, employmentStatus: EmploymentStatusConstants.Empty, favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], postcode: "", address2: "", address1: "", workingHours: 0, week: "", email: "" },
      unsavedOptions: { enable2FA: false, cityOfOrigin: CityOfOriginConstants.Empty, townOrVillage: "", backupNumber: "", mobileNumber: "", color: ColorConstants.Empty, employmentStatus: EmploymentStatusConstants.Empty, favouriteMonth: "", favouriteColor: "", submitDate: "", birthday: "", siteReview: "", paymentMethods: [], automobiles: [], postcode: "", address2: "", address1: "", workingHours: 0, week: "", email: "" },
    });
  });

  it("should update the view to ReadOnly", () => {
    expect(Reducers(createInitialModel(), ChangeView(ViewConstants.ReadOnly))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ view: ViewConstants.ReadOnly }));
  });

  it("should update the view to Editable", () => {
    expect(Reducers({ ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView(ViewConstants.Editable))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ view: ViewConstants.Editable }));
  });

  it("should not the change the view to Editable", () => {
    expect(Reducers({ ...createInitialModel(), view: ViewConstants.ReadOnly }, ChangeView(ViewConstants.ReadOnly))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ view: ViewConstants.ReadOnly }));
  });

  it("should not the change the view to ReadOnly", () => {
    expect(Reducers(createInitialModel(), ChangeView(ViewConstants.Editable))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ view: ViewConstants.Editable }));
  });

  it("should add an answer for A", () => {
    expect(Reducers(createInitialModel(), UpdateAnswer("A", "some text"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ answers: { A: "some text" } }));
  });

  it("should change the password to 123", () => {
    expect(Reducers(createInitialModel(), ChangePassword("123"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ password: "123" }));
  });

  it("should change the username to luca", () => {
    expect(Reducers(createInitialModel(), ChangeUserName("luca"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ userName: "luca" }));
  });

  it("should change the login result to success", () => {
    expect(Reducers(createInitialModel(), SignInResult(true))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ isAuthenticated: true }));
  });

  it("should change the login result to failure", () => {
    expect(Reducers(createInitialModel(), SignInResult(false))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ isAuthenticated: false }));
  });

  it("should change the panel to Login", () => {
    expect(Reducers({ ...createInitialModel(), panel: PanelConstants.Questionnaire }, SwitchPanel(PanelConstants.Login))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ panel: PanelConstants.Login }));
  });

  it("should switch the panel to FailedLogin", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.FailedLogin))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ panel: PanelConstants.FailedLogin }));
  });

  it("should switch the panel to Questionnaire", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.Questionnaire))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ panel: PanelConstants.Questionnaire }));
  });

  it("should switch the panel to Options", () => {
    expect(Reducers(createInitialModel(), SwitchPanel(PanelConstants.OptionsPanel))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ panel: PanelConstants.OptionsPanel }));
  });

  it("should set authentication to false and remove password", () => {
    expect(Reducers({ ...createInitialModel(), userName: "jax", password: "123", isAuthenticated: true, answers: { A: "" } }, SwitchPanel(PanelConstants.Login))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ isAuthenticated: false, password: "", answers: {} }));
  });

  it("should update the unsaved group name to Jeff", () => {
    expect(Reducers(createInitialModel(), UpdateUnsavedGroupName("Jeff"))).toEqual(expect.objectContaining<RecursivePartial<Model>>({ unsavedGroupName: "Jeff" }));
  });
});
