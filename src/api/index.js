import axios from "axios";
//localhost:   baseURL: "http://localhost:5000/"
//heroku: baseURL: "https://funget-social.herokuapp.com/",
const API = axios.create({
  baseURL: "http://localhost:5000/",
});

export const fetchPosts = () => API.get("/posts");
export const getPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}/edit`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likes`);

export const register = (formData) => API.post("/user/register", formData);
export const login = (formData) => API.post("/user/login", formData);
