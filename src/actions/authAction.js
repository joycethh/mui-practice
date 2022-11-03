import { AUTH, LOGOUT } from "../constants/actionType";
import * as api from "../api/index";

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, payload: data });
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
