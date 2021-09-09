import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { answers } from "./models/answerList";
import { Provider } from "react-redux";
import reducers from "./reducers/Reducers";
import { CityOfOriginConstants, ColorConstants, EmploymentStatusConstants, Model, PanelConstants, ViewConstants } from "./models/Model";
import { persistanceMiddleware } from "./middleware/Persistence";

const urlSearchParameters = new URLSearchParams(window.location.search);
const urlParameters = Object.fromEntries(urlSearchParameters.entries());
const group = urlParameters.g;

let model: Model = {
  answers,
  panel: PanelConstants.Login,
  view: ViewConstants.Editable,
  group: group,
  userName: "",
  password: "",
  name: "",
  management: { groups: [], currentPassword: "", newPassword: "", newRepeatPassword: "", selectedGroup: "", unsavedAddUser: "" },
  isAuthenticated: false,
  unsavedGroupName: "",
  options: {
    address1: "",
    address2: "",
    automobiles: [],
    backupNumber: "",
    birthday: "",
    cityOfOrigin: CityOfOriginConstants.Empty,
    color: ColorConstants.Empty,
    email: "",
    employmentStatus: EmploymentStatusConstants.Empty,
    enable2FA: false,
    favouriteColor: "",
    favouriteMonth: "",
    mobileNumber: "",
    paymentMethods: [],
    postcode: "",
    siteReview: "",
    submitDate: "",
    townOrVillage: "",
    week: "",
    workingHours: 0,
  },
  unsavedOptions: {
    address1: "",
    address2: "",
    automobiles: [],
    backupNumber: "",
    birthday: "",
    cityOfOrigin: CityOfOriginConstants.Empty,
    color: ColorConstants.Empty,
    email: "",
    employmentStatus: EmploymentStatusConstants.Empty,
    enable2FA: false,
    favouriteColor: "",
    favouriteMonth: "",
    mobileNumber: "",
    paymentMethods: [],
    postcode: "",
    siteReview: "",
    submitDate: "",
    townOrVillage: "",
    week: "",
    workingHours: 0,
  }
};

const store = createStore(reducers as any, model, composeWithDevTools(applyMiddleware(thunkMiddleware, persistanceMiddleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
