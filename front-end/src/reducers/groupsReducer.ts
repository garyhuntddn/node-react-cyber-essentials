import { Action } from "redux";
import { Groups } from "../models/Model";

export const groupsReducer = (groups: Groups = {}, action: Action): Groups => groups;
