import { createSlice } from "@reduxjs/toolkit";
import { FetchPosts, CreatePost, DeletePost } from "../services";

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [FetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [FetchPosts.rejected]: (state, action) => {
      state.posts = [];
    },
    CreatePost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    [DeletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter(
        (restPosts) => restPosts._id !== action.payload
      );
    },
  },
});

console.log("postsSlice", postsSlice);

export default postsSlice.reducer;
