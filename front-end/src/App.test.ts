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
  return { answers, view: ViewConstants.Editable, name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false };
};

describe("reducer tests", () => {
  it("should return the initial state", () => {
    expect(Reducers(createInitialModel(), {} as any)).toEqual({ answers, view: ViewConstants.Editable, name: "", group: "", password: "", userName: "", panel: PanelConstants.Login, isAuthenticated: false });
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
});
