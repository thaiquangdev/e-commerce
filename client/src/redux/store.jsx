import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
