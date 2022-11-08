import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../featuers/posts/postsSlice";
import { authReducer } from "../featuers/users/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: authReducer,
  },
});
