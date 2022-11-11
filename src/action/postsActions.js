import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//localhost:   baseURL: "http://localhost:5000/"
//heroku: baseURL: "https://funget-social.herokuapp.com/",

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const fetchPosts = createAsyncThunk("/posts/fetchPosts", async () => {
  try {
    const response = await API.get();
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const createPost = createAsyncThunk(
  "/posts/createPost",
  async (newPost) => {
    try {
      const response = await API.post(newPost);
      console.log("create response", response);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
//   export const fetchPosts = () => API.get("/posts");
//   export const getPost = (id) => API.get(`/posts/${id}`);
//   export const createPost = (newPost) => API.post("/posts", newPost);
//   export const updatePost = (id, updatedPost) =>
//     API.patch(`/posts/${id}/edit`, updatedPost);
//   export const deletePost = (id) => API.delete(`/posts/${id}`);
//   export const likePost = (id) => API.patch(`/posts/${id}/likes`);

//   export const register = (formData) => API.post("/users/register", formData);
//   export const login = (formData) => API.post("/users/login", formData);
