import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../service/api.service";

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
    return data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  authData: null,
};

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
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
    },
  },
});

//seletor

export const selectUserById = (state, userId) =>
  state.find((user) => user._id === userId);
//actions
export const { logout, auth } = usersSlice.actions;

export default usersSlice.reducer;
