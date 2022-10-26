import axios from "axios";
//localhost:   baseURL: "http://localhost:5000/"
const API = axios.create({
  baseURL: "https://funget-social.herokuapp.com/",
});

export const fetchPosts = () => API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
