import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: true,
    error: null,
  },
  reducers: {
    fetchPosts(state, action) {},
    getPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
});

console.log("postsSlice", postsSlice);
