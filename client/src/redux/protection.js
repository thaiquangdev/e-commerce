import { logoutAction } from "./actions/userAction";

export const ErrorAction = (error, dispatch, action) => {
  const message =
    error.message && error.response.data.message
      ? error.response.data.message
      : error.message;

  if (message === "Not authorized, token fail") {
    // dispatch logout
    dispatch(logoutAction());
  }
  return dispatch({ type: action, payload: message });
};
