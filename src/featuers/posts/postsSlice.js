import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { postService } from "../../service/api.service";

//localhost:   baseURL: "http://localhost:5000/"
//heroku: baseURL: "https://funget-social.herokuapp.com/",
const user = JSON.parse(localStorage.getItem("profile"));
console.log("user in postsSlice", user);

const initialState = {
  posts: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  try {
    const response = await postService.fetchPosts();
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const createPost = createAsyncThunk(
  "/posts/createPost",
  async (newPost) => {
    try {
      const response = await postService.createPost(newPost);

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
      const response = await postService.updatePost({ postId, updatedPost });
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
      const response = await postService.deletePost(postId);
      if (response.status === 200) return postId;
    } catch (error) {
      return error.message;
    }
  }
);
export const likePost = createAsyncThunk("/posts/likePost", async (postId) => {
  try {
    const response = await postService.likePost(postId);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const commentPost = createAsyncThunk(
  "/posts/commentPost",
  async ({ postId, content }) => {
    try {
      const response = await postService.commentPost({ postId, content });
      console.log("comment response", response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const getComment = createAsyncThunk(
  "/posts/comments/",
  async (postId) => {
    try {
      const response = await postService.commentPost(postId);

      return response.data;
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
        state.posts.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "delete post is not complete";
        }
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "update post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = [action.payload, ...restPosts];
      })
      .addCase(likePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "like post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = [action.payload, ...restPosts];
      })
      .addCase(commentPost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "like post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = [action.payload, ...restPosts];
      })
      .addCase(commentPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getComment.fulfilled, (state, action) => {
        if (!action.payload) {
          return "like post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload._id
        );
        state.posts = [action.payload, ...restPosts];
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
