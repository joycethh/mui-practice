import { AUTH, LOGOUT } from "../constants/actionType";

const authReducers = (state = { authData: null }, action) => {
  console.log("user state and action", state, action);
  switch (action.type) {
    case AUTH:
      console.log("reducer auth action.payload", action.payload);
      return { ...state, authData: action?.payload };
    case LOGOUT:
      console.log("reducer logout", action.stype);

      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducers;
