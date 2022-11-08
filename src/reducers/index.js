import { combineReducers } from "redux";
import { postsReducer } from "./postsReducers";
import { authReducer } from "./authReducers";

export const reducers = combineReducers({ postsReducer, authReducer });
