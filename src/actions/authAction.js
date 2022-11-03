import { AUTH, LOGOUT } from "../constants/actionType";
import * as api from "../api/index";

// export const registerAction = (formData) => async (dispatch) => {
//   try {
//     const { data } = await api.register(formData); //API.post("/users/register", formData);
//     console.log("action-auth-data", data);
//     dispatch({ type: AUTH, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const loginAction = (formData) => async (dispatch) => {
//   try {
//     const { data } = await api.login(formData);
//     console.log("action-auth-data", data);
//     dispatch({ type: AUTH, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    console.log("action-auth-data", data);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    console.log("action-auth-data", data);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error.message);
  }
};
