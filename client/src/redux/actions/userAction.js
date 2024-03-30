import * as Types from "../constants/AllConstant";
import * as Apis from "../../api/userApi";
import { toast } from "react-hot-toast";
import { ErrorAction } from "../protection";

// logout user action
const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: Types.USER_LOGOUT });
    dispatch({ type: Types.USER_LOGIN_RESET });
    await Apis.logoutService();
  } catch (error) {
    toast.error("Logout failed");
  }
};

// login user action
const loginAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: Types.USER_LOGIN_REQUEST });
    const data = await Apis.loginService(user);
    dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    ErrorAction(error, dispatch, Types.USER_LOGIN_FAIL);
  }
};

export { loginAction, logoutAction };
