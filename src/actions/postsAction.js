import {
  FETCH_ALL,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionType";
import * as api from "../api/index";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await api.fetchPosts();
  console.log("action fetchall-data", data);
  try {
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPost(id);
    console.log("action get-one", data);
    dispatch({ type: GET_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    console.log("action create-data", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    console.log("action update-data", data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
