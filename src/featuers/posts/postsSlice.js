import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    getPost: {
      reducer(state, action) {
        return action.payload;
      },
    },
    createPost: {
      reducer(state, action) {
        return action.payload;
      },
    },
    updatePost: {
      reducer(state, action) {
        return action.payload;
      },
    },
    deletePost: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { getPosts, getPost, createPost, updatePost, deletePost } =
  postsSlice.actions;
export default postsSlice.reducer;
