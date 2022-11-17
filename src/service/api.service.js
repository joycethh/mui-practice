import axios from "axios";

const API = axios.create({
  baseURL: "https://funget-social.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

const register = (formData) => {
  return API.post("/users/register", formData);
};

const login = (formData) => {
  return API.post("/users/login", formData);
};

const logout = () => {
  localStorage.removeItem("profile");
};

const fetchPosts = () => {
  return API.get("/posts");
};

const createPost = (newPost) => {
  return API.post("/posts", newPost);
};

const updatePost = ({ postId, updatedPost }) => {
  return API.patch(`/posts/edit/${postId}`, updatedPost);
};

const deletePost = (postId) => {
  return API.delete(`/posts/edit/${postId}`);
};

export const authService = {
  register,
  login,
  logout,
};

export const postService = { fetchPosts, createPost, updatePost, deletePost };
