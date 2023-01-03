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
  comments: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  try {
    const response = await postService.fetchPosts();
    console.log("fetchAll-response", response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const getAPost = createAsyncThunk("/posts/getAPost", async (id) => {
  try {
    const response = await postService.getAPost(id);
    console.log("getOne-response", response);
    return response.data;
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
      console.log("delete response", response);
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

  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload.postData;
        state.comments = action.payload.commentData;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAPost.fulfilled, (state, action) => {
        console.log("getOne-action.payload", action.payload);
        state.posts = action.payload.postData;
        state.comments = action.payload.commentData;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload.postData);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "delete post is not complete";
        }
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.postData
        );
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "update post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload.postData._id
        );
        state.posts = [action.payload.postData, ...restPosts];
      })
      .addCase(likePost.fulfilled, (state, action) => {
        if (!action.payload) {
          return "like post is not complete";
        }
        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload.postData._id
        );
        state.posts = [action.payload.postData, ...restPosts];
      })
      .addCase(commentPost.fulfilled, (state, action) => {
        console.log("commentPost action.payload", action.payload);

        const restPosts = state.posts.filter(
          (post) => post._id !== action.payload.postData._id
        );
        state.posts = [action.payload.postData, ...restPosts];

        const restComments = state.comments.filter(
          (comment) => comment._id !== action.payload.commentData._id
        );
        state.comments = [action.payload.commentData, ...restComments];
        console.log("state.comments", state.comments);
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
export const selectAllComments = (state) => state.posts.comments;
//actions
export const { likesAdded } = postsSlice.actions;
export default postsSlice.reducer;
