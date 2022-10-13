import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/postsReducers";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
