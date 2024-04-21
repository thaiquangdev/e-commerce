import { Link, useLocation } from "react-router-dom";
import Input from "./Input";
import icons from "../utils/icons.js";
import { useState } from "react";
import Breadcrumb from "./Breadcrumb.jsx";
import { useSelector } from "react-redux";

const { FiSearch, FaRegHeart, IoCartOutline, LuUser2, MdOutlineMenu } = icons;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const wishlist = useSelector((state) => state?.wishlist?.wishlist?.wishlist);
  const totalItems = useSelector((state) => state?.cart?.totalItems);
  console.log(totalItems);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-black">
        <div className="max-w-1170 mx-auto max-lg:max-w-970 max-[980px]:max-w-840 max-[860px]:max-w-[765px] max-[780px]:max-w-640">
          <p className="text-white py-3 flex justify-center items-center">
            <span className="pr-1 text-[14px] leading-[21px] font-normal ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              // to="/products"
              className="underline decoration-solid text-[14px] font-semibold leading-[21px]"
            >
              ShopNow
            </Link>
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-line">
        <div className="max-w-1170 mx-auto max-lg:max-w-970 max-[980px]:max-w-840 max-[860px]:max-w-[765px] max-[780px]:max-w-640">
          <div className="flex items-center py-[25px] ">
            <div
              className="w-3/12 flex items-center gap-2 max-[980px]:w-2/12 "
              onClick={handleClickOpen}
            >
              <div className="relative hidden max-[780px]:block">
                <MdOutlineMenu size={20} />
              </div>
              <ul
                className={`min-[780px]:hidden absolute left-0 top-[46px] z-20 flex flex-col gap-2 items-center justify-center w-1/3 h-screen bg-white ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <li className="text-[18px] font-medium leading-6">
                  <Link
                    to="/"
                    onClick={handleClick}
                    className={location.pathname === "/" ? "underline" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[18px] font-medium leading-6">
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
                <li className="text-[18px] font-medium leading-6">
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
                <li className="text-[18px] font-medium leading-6">
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
              <Link to="/">
                <h1 className="text-[24px] font-bold">Exclusive</h1>
              </Link>
            </div>
            <div className="flex w-9/12 justify-between max-[980px]:w-10/12 max-[780px]:justify-end">
              <ul className="flex items-center justify-center gap-10 max-[980px]:gap-5 max-[780px]:hidden">
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
                <div className="flex items-center justify-center gap-5">
                  <Link to="/wishlist" className="relative">
                    <FaRegHeart size={25} />
                    {wishlist && (
                      <span className="w-[20px] h-[20px] text-center text-white rounded-full bg-red absolute bottom-[-12px] right-[-10px] text-[14px]">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                  <Link to="/cart" className="relative">
                    <IoCartOutline size={25} />
                    {totalItems && (
                      <span className="w-[20px] h-[20px] text-center text-white rounded-full bg-red absolute bottom-[-12px] right-[-10px] text-[14px]">
                        {totalItems}
                      </span>
                    )}
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
