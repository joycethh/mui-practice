import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/postsReducers";
import { authReducer } from "./reducers/authReducers";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: authReducer, ///will need to use createSlice.
  },
});

// import { postsReducer } from "./reducers/postsReducers";
// import { authReducer } from "./reducers/authReducers";
// import { createStore, applyMiddleware, compose } from "redux";
// import { combineReducers } from "redux";
// import thunk from "redux-thunk";

// const reducers = combineReducers({ postsReducer, authReducer });

// export const store = createStore(reducers, compose(applyMiddleware(thunk)));
