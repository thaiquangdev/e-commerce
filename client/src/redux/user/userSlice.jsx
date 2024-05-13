import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRegister } from "../../api/userApi";
import { toast } from "react-toastify";

export const fetchUserLogin = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiLogin(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiLogout();
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchUserRegister = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiRegister(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(fetchUserRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.userRegister = action.payload;
      })
      .addCase(fetchUserRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(fetchUserLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserLogout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload;
      })
      .addCase(fetchUserLogout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default userSlice.reducer;
