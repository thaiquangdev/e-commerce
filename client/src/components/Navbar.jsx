import { Link } from "react-router-dom";
import Input from "./Input";
import icons from "../utils/icons.js";

const { FiSearch } = icons;

const Navbar = () => {
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
              <ul className="flex items-center justify-center gap-12">
                <li className="text-[16px] font-normal leading-6">
                  <Link>Home</Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link>Contact</Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link>About</Link>
                </li>
                <li className="text-[16px] font-normal leading-6">
                  <Link>Sign Up</Link>
                </li>
              </ul>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
