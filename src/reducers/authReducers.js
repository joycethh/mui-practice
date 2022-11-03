import { AUTH, LOGOUT } from "../constants/actionType";

export const authReducer = (state = { authData: null }, action) => {
  console.log("action", action);
  switch (action.type) {
    case AUTH:
      console.log("action stype", action);

      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log("action stype", action.stype);
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
