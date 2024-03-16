import bannerLogin from "../../assets/images/bannerLogin.png";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-1170 mx-auto">
      <div className="row my-[40px]">
        <div className="col-7">
          <img src={bannerLogin} alt="" className="w-full object-contain" />
        </div>
        <div className="col-5 flex items-center justify-center">
          <form className="">
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
              />
              <Input
                type="email"
                place="Email"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
              />
              <Input
                type="text"
                place="Phone Number"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
              />
              <Input
                type="password"
                place="Password"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
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
