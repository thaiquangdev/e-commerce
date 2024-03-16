import { Link } from "react-router-dom";
import bannerLogin from "../../assets/images/bannerLogin.png";
import Input from "../../components/Input";

const Login = () => {
  return (
    <div className="max-w-1170 mx-auto">
      <div className="row my-[40px]">
        <div className="col-7">
          <img src={bannerLogin} alt="" className="w-full object-contain" />
        </div>
        <div className="col-5 flex items-center justify-center">
          <form className="">
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
              />
              <Input
                type="password"
                place="Password"
                classN="py-2 mt-3 border border-b-line border-l-0 border-r-0 border-t-0 placeholder:text-[16px] placeholer:leading-[24px]"
              />
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
