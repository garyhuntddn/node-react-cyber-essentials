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
import { Model, PanelConstants, ViewConstants } from "./models/Model";
import { persistanceMiddleware } from "./middleware/Persistence";

const urlSearchParameters = new URLSearchParams( window.location.search );
const urlParameters = Object.fromEntries( urlSearchParameters.entries() );
const group = urlParameters.g;

let model: Model = {
  answers,
  panel: PanelConstants.Login,
  view: ViewConstants.Editable,
  group: group,
  userName: "",
  password: "",
  isAuthenticated: false
};

const store = createStore( reducers as any, model, composeWithDevTools( applyMiddleware( thunkMiddleware, persistanceMiddleware ) ) );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById( "root" )
);

reportWebVitals();
