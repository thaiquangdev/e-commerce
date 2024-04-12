import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUpdateCart } from "../../api/userApi";

const initialState = {
  cart: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const fetchUpdateCart = createAsyncThunk(
  "cart/updateCart",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiUpdateCart(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpdateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cart = action.payload;
      })
      .addCase(fetchUpdateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default cartSlice.reducer;
