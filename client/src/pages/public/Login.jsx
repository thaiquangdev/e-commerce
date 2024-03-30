import { Link, useLocation, useNavigate } from "react-router-dom";
import bannerLogin from "../../assets/images/bannerLogin.png";
import Input from "../../components/Input";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userAction";
import { useEffect } from "react";
import toast from "react-hot-toast";

// validation for yup
const Schema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const redirect = state?.from ? state.from : "/";

  // states
  const {
    userLogin: { loading, userInfo, error },
  } = useSelector((state) => state);

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(loginAction(values));
    },
  });

  // error handler
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "USER_LOGIN_RESET" });
    }
    // if user logged in redirect to home page
    if (userInfo) {
      navigate(redirect);
    }
  }, [dispatch, error, userInfo, navigate, redirect]);

  return (
    <div className="max-w-1170 mx-auto">
      <div className="row my-[40px]">
        <div className="col-7">
          <img src={bannerLogin} alt="" className="w-full object-contain" />
        </div>
        <div className="col-5 flex items-center justify-center">
          <form className="" onSubmit={formik.handleSubmit}>
            <h1 className="text-[36px] leading-[30px] font-medium">
              Log in to Exclusive
            </h1>
            <p className="text-[16px] leading-[24px] mt-3">
              Enter your details below
            </p>
            <div className="flex flex-col">
              <Input
                type="email"
                place="Email"
                classN="py-2 mt-4 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.email}
                name="email"
              />
              {formik.errors.email && (
                <small className="text-red">{formik.errors.email}</small>
              )}
              <Input
                type="password"
                place="Password"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.password}
                name="password"
              />
              {formik.errors.password && (
                <small className="text-red">{formik.errors.password}</small>
              )}
            </div>
            <div className="mt-[24px] flex items-center justify-between">
              <button
                type="submit"
                className="py-2 px-[25px] rounded-sm text-[16px] text-white leading-[24px] font-medium bg-red"
              >
                Log In
              </button>
              <Link className="text-[16px] leading-[24px] text-red">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
