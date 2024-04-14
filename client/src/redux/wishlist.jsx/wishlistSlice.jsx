import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAddToWishList } from "../../api/userApi";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const fetchAddToWishlist = createAsyncThunk(
  "user/addWishlist",
  async (pid, { rejectWithValue }) => {
    try {
      const response = await apiAddToWishList(pid);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(fetchAddToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default wishlistSlice.reducer;
