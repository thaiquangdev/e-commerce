import bannerLogin from "../../../assets/images/bannerLogin.png";
import Input from "../../../components/inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { registerSchema } from "../../../utils/validation";
import { fetchUserRegister } from "../../../redux/user/userSlice";
import { useEffect, useState } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      name: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      dispatch(fetchUserRegister(values));
    },
  });

  return (
    <div className="max-w-1170 mx-auto">
      <div className="row my-[40px]">
        <div className="col-7">
          <img src={bannerLogin} alt="" className="w-full object-contain" />
        </div>
        <div className="col-5 flex items-center justify-center">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-[36px] leading-[30px] font-medium">
              Create an account
            </h1>
            <p className="text-[16px] leading-[24px] mt-3">
              Enter your details below
            </p>
            <div className="flex flex-col">
              <Input
                type="text"
                place="Name"
                classN="py-2 mt-4 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.name}
                name="name"
              />
              <Input
                type="email"
                place="Email"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.email}
                name="email"
              />
              <Input
                type="text"
                place="Phone Number"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.phoneNumber}
                name="phoneNumber"
              />
              <Input
                type="password"
                place="Password"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
                onCh={formik.handleChange}
                onBl={formik.handleBlur}
                val={formik.values.password}
                name="password"
              />
            </div>
            <div className="mt-[24px]">
              <button
                type="submit"
                className="w-full py-2 px-[25px] rounded-sm text-[16px] text-white leading-[24px] font-medium bg-red "
              >
                Create Account
              </button>
              <div className="flex items-center justify-center mt-[20px]">
                <span className="text-[12px] leading-[24px]">
                  Already an account
                </span>
                <Link
                  to="/login"
                  className="text-[12px] leading-[24px] underline pl-2"
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
