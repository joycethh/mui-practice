import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const fetchPosts = () => API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => API.delete(`'/posts/${id}`);