import axios from "axios";

const API = axios.create({
  baseURL: process.env.BASE_URL,
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

//posts service
const fetchPosts = () => {
  return API.get("/posts");
};

const getAPost = (id) => {
  return API.get(`/posts/${id}`);
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

const likePost = (postId) => {
  return API.patch(`/posts/likes/${postId}`);
};

const commentPost = ({ postId, content }) => {
  return API.post(`/posts/comments/${postId}`, content);
};
export const authService = {
  register,
  login,
  logout,
};

export const getComment = (postId) => {
  return API.get(`/posts/${postId}`);
};

export const postService = {
  fetchPosts,
  getAPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost,
  getComment,
};
