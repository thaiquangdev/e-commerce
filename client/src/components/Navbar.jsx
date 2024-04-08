import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "./Input";
import icons from "../utils/icons.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../redux/actions/userAction.js";
import toast from "react-hot-toast";
import Breadcrumb from "./Breadcrumb.jsx";

const { FiSearch, FaRegHeart, IoCartOutline, LuUser2 } = icons;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClick = () => {
    setIsActive(true);
  };

  // const handleLogout = () => {
  //   dispatch(logoutAction());
  //   toast.success("Logout successfull");
  //   navigate("/login");
  // };

  return (
    <div>
      <div className="bg-black">
        <div className="max-w-1170 mx-auto">
          <p className="text-white py-3 flex justify-center items-center">
            <span className="pr-1 text-[14px] leading-[21px] font-normal ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link className="underline decoration-solid text-[14px] font-semibold leading-[21px]">
              ShopNow
            </Link>
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-line">
        <div className="max-w-1170 mx-auto">
          <div className="flex items-center justify-between py-[25px] ">
            <div>
              <h1 className="text-[24px] font-bold">Exclusive</h1>
            </div>
            <div>
              <ul className="flex items-center justify-center gap-10">
                <li className="text-[16px] font-normal leading-6">
                  <Link
                    to="/"
                    onClick={handleClick}
                    className={location.pathname === "/" ? "underline" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link
                    to="/products"
                    onClick={handleClick}
                    className={
                      location.pathname === "/:category" ? "underline" : ""
                    }
                  >
                    Products
                  </Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link
                    to="/contact"
                    onClick={handleClick}
                    className={
                      location.pathname === "/contact" ? "underline" : ""
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link
                    to="/about"
                    onClick={handleClick}
                    className={
                      location.pathname === "/about" ? "underline" : ""
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link
                    to="/register"
                    onClick={handleClick}
                    className={
                      location.pathname === "/register" ? "underline" : ""
                    }
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
                <Input
                  type="text"
                  place="What are you looking for?"
                  classN="py-1 px-2 placeholder:text-[12px] placeholder:leading-[8px] bg-input-bg"
                />
                <span className="bg-input-bg p-2">
                  <FiSearch />
                </span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link>
                  <FaRegHeart size="20px" />
                </Link>
                <Link>
                  <IoCartOutline size="20px" />
                </Link>
                <div className=" rounded-full p-2 bg-red flex items-center justify-center cursor-pointer">
                  <Link to="/dashboard">
                    <LuUser2 size="20px" color="white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-1170 mx-auto">
        <div className="mt-[30px]">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
