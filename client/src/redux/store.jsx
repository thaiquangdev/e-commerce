import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist.jsx/wishlistSlice";

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
