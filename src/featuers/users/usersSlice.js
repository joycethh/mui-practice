import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

const user = JSON.parse(localStorage.getItem("profile"));
console.log("user in slice", user);
export const register = createAsyncThunk(
  "/users/register",
  async (formData) => {
    try {
      const { data } = await authService.register(formData);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const login = createAsyncThunk("/users/login", async (formData) => {
  try {
    const { data } = await authService.login(formData);
    console.log("data", data);
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = user;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    auth(state, action) {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },

    logout(state, action) {
      localStorage.removeItem("profile");
      state.authData = null;
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.users = action.payload.user;
    },

    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
  },
});

//seletor

export const selectUserById = (state, userId) =>
  state.find((user) => user._id === userId);
//actions
export const { logout, auth } = usersSlice.actions;

export default usersSlice.reducer;
