import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { answers } from "./models/answerList";
import { Provider } from "react-redux";
import reducers from "./reducers/Reducers";
import { Model, ViewConstants } from "./models/Model";

const initialModel: Model = {
  answers,
  view: ViewConstants.Editable
};

const store = createStore( reducers as any, initialModel, composeWithDevTools() );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById( "root" )
);

reportWebVitals();
