import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

//localhost:   baseURL: "http://localhost:5000/"
//heroku: baseURL: "https://funget-social.herokuapp.com/",
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
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const updatePost = createAsyncThunk(
  "/posts/updatePost",
  async ({ postId, updatedPost }) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/posts/edit/${postId}`,
        updatedPost
      );

      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const deletePost = createAsyncThunk(
  "/posts/deletePost",
  async (postId) => {
    try {
      const response = await axios.delete(`${baseUrl}/posts/edit/${postId}`);
      console.log("delete response", response);
      if (response.status === 200) return postId;
    } catch (error) {
      return error.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likesAdded(state, action) {
      const { postId } = action.payload;

      const post = state.posts.find((post) => post._id === postId);
      if (post) {
        post.likes++;
      }
    },
  },
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
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log("delete post is not complete");
          return;
        }
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload) {
          console.log("update post is not complete");
          return;
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = [...restPosts, action.payload];
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

//actions
export const { likesAdded } = postsSlice.actions;
export default postsSlice.reducer;
