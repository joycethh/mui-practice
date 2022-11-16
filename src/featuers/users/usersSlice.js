import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//localhost:   baseURL: "http://localhost:5000/"
//heroku: baseURL: "https://funget-social.herokuapp.com/",
const baseUrl = "http://localhost:5000";

const initialState = {
  authData: {},
};

export const login = createAsyncThunk("/users/login", async (formData) => {
  try {
    const { data } = await axios.post(`${baseUrl}/users/login`, formData);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const register = createAsyncThunk(
  "/users/register",
  async (formData) => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/register`, formData);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    auth(state, action) {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
      console.log("auth action.payload");
    },

    logout(state, action) {
      localStorage.clear();
      state.authData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log("login action.payload", action.payload);
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.authData = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log("register action.payload", action.payload);
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.authData = action.payload;
      });
  },
});

//seletor

export const selectUserById = (state, userId) =>
  state.find((user) => user._id === userId);
//actions
export const { logout, auth } = usersSlice.actions;

export default usersSlice.reducer;
