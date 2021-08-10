import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { answers } from "./models/answerList";
import { Provider } from "react-redux";
import reducers from "./reducers/Reducers";
import { Model, ViewConstants } from "./models/Model";
import { persistanceMiddleware } from "./middleware/Persistence";

const initialModel: Model = {
  answers,
  view: ViewConstants.Editable
};

const store = createStore( reducers as any, initialModel, composeWithDevTools( applyMiddleware( persistanceMiddleware ) ) );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById( "root" )
);

reportWebVitals();
