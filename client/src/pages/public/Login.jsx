import { Link, useNavigate } from "react-router-dom";
import bannerLogin from "../../assets/images/bannerLogin.png";
import Input from "../../components/Input";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin } from "../../redux/user/userSlice";
import { loginSchema } from "../../utils/validation";
import { useEffect } from "react";

// validation for yup

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      dispatch(fetchUserLogin(values));
    },
  });

  useEffect(() => {
    if (user?.success === true) {
      localStorage.setItem("token", user?.token);
      navigate("/");
    }
  }, [user]);

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
