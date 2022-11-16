import axios from "axios";

import authHeader from "../users/auth-header";

const API_URL = "http://localhost:5000/posts";

const fetchPosts = () => {
  return axios.get(API_URL);
};

const createPost = () => {
  return axios.post(API_URL, { headers: authHeader() });
};

const postService = { fetchPosts, createPost };
export default postService;
