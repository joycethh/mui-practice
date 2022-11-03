import { AUTH, LOGOUT } from "../constants/actionType";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...state, authData: action.payload };
    case LOGOUT:
      console.log("action stype", action.stype);
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
