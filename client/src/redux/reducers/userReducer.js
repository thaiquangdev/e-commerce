import * as Types from "../constants/AllConstant";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.USER_LOGIN_REQUEST:
      return { loading: true };
    case Types.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case Types.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case Types.USER_LOGIN_RESET || Types.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
