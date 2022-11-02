import { AUTH, LOGOUT } from "../constants/actionType";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.stype) {
    case AUTH:
      //auth logic
      //1. send formData to server, which indudes either register data or login data
      //--done in api calls and action
      //2. receive the email, token from server
      //3. save the info to local
      //4. update global state
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log("auth action data", action.data);
      return { ...state, authData: action?.data };
    case LOGOUT:
      //log out logic
      //1. clear local storage
      //2. update global state
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
