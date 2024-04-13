import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiDeleteCart,
  apiGetCart,
  apiUpdateCart,
  apiUpdateQuantityCart,
} from "../../api/userApi";
import { toast } from "react-toastify";

export const fetchUpdateCart = createAsyncThunk(
  "cart/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await apiUpdateCart(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchGetCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiGetCart();
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchDeleteCart = createAsyncThunk(
  "cart/delete",
  async (cid, { rejectWithValue }) => {
    try {
      const response = await apiDeleteCart(cid);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchUpdateQuantityCart = createAsyncThunk(
  "cart/updatequantity",
  async ({ cid, newquantity }, { rejectWithValue }) => {
    try {
      const response = await apiUpdateQuantityCart(cid, newquantity);
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpdateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProduct = action.payload;
        if (state.isSuccess) {
          toast.success("Product add to card");
        }
      })
      .addCase(fetchUpdateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(fetchGetCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cartProducts = action.payload;
      })
      .addCase(fetchGetCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(fetchDeleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deleteCart = action.payload;
        if (state.isSuccess) {
          toast.success("Delete product cart is successfully!");
        }
      })
      .addCase(fetchDeleteCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isSuccess === false && state.isError) {
          toast.success("Something went wrong!");
        }
      })
      .addCase(fetchUpdateQuantityCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpdateQuantityCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updateQuantityCart = action.payload;
        if (state.isSuccess) {
          toast.success("Update quantity product cart is successfully!");
        }
      })
      .addCase(fetchUpdateQuantityCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isSuccess === false && state.isError) {
          toast.success("Something went wrong!");
        }
      });
  },
});

export default cartSlice.reducer;
