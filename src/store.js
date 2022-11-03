import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/postsReducers";
import { authReducer } from "./reducers/authReducers";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: authReducer,
  },
});
