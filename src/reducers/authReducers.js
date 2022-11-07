import { AUTH, LOGOUT } from "../constants/actionType";

export const authReducer = (state = { authData: null }, action) => {
  console.log("reducer state", state);
  console.log("state.authData", state.authData);
  console.log("action", action);
  switch (action.type) {
    case AUTH:
      return { ...state, authData: action?.payload };
    case LOGOUT:
      console.log("reducer logout", action.stype);
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
