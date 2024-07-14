import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk("user/register", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("/user/register", data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

export const LoginUser = createAsyncThunk("user/login", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("/user/login", data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    token: localStorage.getItem("token") || null,
    error: null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      state.isAuth = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.isAuth = true;
        localStorage.setItem("token", state.token);
        localStorage.setItem("isAuth", state.isAuth.toString());
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
        state.isAuth = true;
        localStorage.setItem("token", state.token);
        localStorage.setItem("isAuth", state.isAuth.toString());
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
      });
  },
});

export default UserSlice.reducer;
export const { logout } = UserSlice.actions;
