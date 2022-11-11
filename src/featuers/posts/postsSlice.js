import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000";

const initialState = {
  posts: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const createPost = createAsyncThunk(
  "/posts/createPost",
  async (newPost) => {
    try {
      const response = await axios.post(`${baseUrl}/posts`, newPost);
      console.log("create response", response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

//selectors
export const selectAllPosts = createSelector(
  (state) => ({
    posts: state.posts.posts,
  }),
  (state) => state
);

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post._id === postId);
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsSlice.reducer;
