import { Model } from "../models/Model";
import { combineReducers } from "redux";
import { viewReducer } from "./viewReducer";
import { answersReducer } from "./answersReducer";
import { userNameReducer } from "./userNameReducer";
import { passwordReducer } from "./passwordReducer";
import { isAuthenticatedReducer } from "./isAuthenticatedReducer";
import { panelReducer } from "./panelReducer";
import { nameReducer } from "./nameReducer";
import { unsavedOptionsReducer } from "./unsavedOptionsReducer";
import { groupReducer } from "./groupReducer";
import { optionsReducer } from "./optionsReducer";

const reducers = combineReducers<Model>( {
  view: viewReducer,
  answers: answersReducer,
  userName: userNameReducer,
  password: passwordReducer,
  isAuthenticated: isAuthenticatedReducer,
  panel: panelReducer,
  options: optionsReducer,
  unsavedOptions: unsavedOptionsReducer,
  name: nameReducer,
  group: groupReducer
} );

export default reducers;
