import { ChangeUserName } from "./actions/ChangeUserName";
import { ChangeView } from "./actions/ChangeViewAction";
import { UpdateAnswer } from "./actions/UpdateAnswerAction";
import { answers } from "./models/answerList";
import { ViewConstants } from "./models/Model";
import Reducers from "./reducers/Reducers";
//import * as actions from '../actions/posts/getPost';
//import { UPDATE_POST_SUCCESS } from '../actions/posts/updatePost';
//import expect from "expect";
//import getPostMock from '../mocks/getPostMock';

describe("reducer tests", () => {
  it("should return the initial state", () => {
    expect(Reducers({ answers, view: ViewConstants.Editable, group: "", userName: "" }, {} as any)).toEqual({ answers, view: ViewConstants.Editable, group: "", userName: ""  });
  });

  it("should update the view to ReadOnly", () => {
    expect(Reducers({ answers, view: ViewConstants.Editable, group: "", userName: "" }, ChangeView(ViewConstants.ReadOnly))).toEqual({ answers, view: ViewConstants.ReadOnly, group: "", userName: ""  });
  });

  it("should update the view to Editable", () => {
    expect(Reducers({ answers, view: ViewConstants.ReadOnly, group: "", userName: "" }, ChangeView(ViewConstants.Editable))).toEqual({ answers, view: ViewConstants.Editable, group: "", userName: "" });
  });

  it("should not the change the view to Editable", () => {
    expect(Reducers({ answers, view: ViewConstants.ReadOnly, group: "", userName: "" }, ChangeView(ViewConstants.ReadOnly))).toEqual({ answers, view: ViewConstants.ReadOnly, group: "", userName: ""  });
  });

  it("should not the change the view to ReadOnly", () => {
    expect(Reducers({ answers, view: ViewConstants.Editable, group: "", userName: "" }, ChangeView(ViewConstants.Editable))).toEqual({ answers, view: ViewConstants.Editable, group: "", userName: ""  });
  });

  it("should add an answer for A", () => {
    expect(Reducers({ answers, view: ViewConstants.Editable, group: "", userName: "" }, UpdateAnswer("A", "some text"))).toHaveProperty("answers.A", "some text");
  });

  it("should change the username to luca", () => {
    expect(Reducers({ answers, view: ViewConstants.Editable, group: "", userName: "" }, ChangeUserName("luca"))).toHaveProperty("userName", "luca");
  });
});
