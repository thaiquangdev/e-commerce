import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as userReducers from "./reducers/userReducer";

const rootReducer = combineReducers({
  // reducers
  userLogin: userReducers.LoginReducer,
});

// get userInfo from localStrage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
