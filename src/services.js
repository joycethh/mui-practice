import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000/posts";

export const FetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => await (await axios.get(`${BASE_URL}/posts`)).data
);

export const CreatePost = createAsyncThunk(
  "posts/createPost",
  async (post) => await (await axios.post(`${BASE_URL}/posts`, post)).data
);

export const DeletePost = createAsyncThunk(
  "posts/deletePost",
  async (id) => await await axios.delete(`${BASE_URL}/posts/${id}`)
);
