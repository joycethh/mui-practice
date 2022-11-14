import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

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
      const response = await axios.post(`${baseUrl}/users/register`, formData);
      console.log("register reponse", response);
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
    logout(state, action) {
      state.authData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        console.log("login action.payload", action.payload);
        state.authData = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.authData = action.payload;
      });
  },
});

//seletor

export const selectUserById = (state, userId) =>
  state.find((user) => user._id === userId);
//actions
export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
