import React from "react";
import { Action } from "redux";
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

const getAnswers = async () => {
  let model: Model = {
    answers,
    view: ViewConstants.Editable
  };

  const url = "http://localhost:2999/answers";

  const response = await fetch(url, { headers: { "Accept": "application/json" } });
  const json = await response.json() as Array<Action>;

  for (const action of json) {
    model = reducers(model,action);
  }

  const store = createStore(reducers as any, model, composeWithDevTools(applyMiddleware(persistanceMiddleware)));

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

getAnswers();

reportWebVitals();
