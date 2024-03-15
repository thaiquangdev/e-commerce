import Input from "./Input";
import icons from "../utils/icons";
import { Link } from "react-router-dom";

const { VscSend } = icons;

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-1170 mx-auto py-[80px]">
        <div className="flex">
          <div className="col-3">
            <div>
              <h1 className="text-[24px] font-bold text-white leading-[24px]">
                Exclusive
              </h1>
              <p className="text-[20px] font-medium text-white leading-[28px] mt-3">
                Subscribe
              </p>
              <p className="text-[16px] font-normal text-white leading-[24px] mt-3">
                Get 10% off your first order
              </p>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <Input
                type="text"
                place="Enter your email"
                classN="bg-black border border-r-0 border-solid border-white rounded-r-none py-[8px] pl-[12px] placeholder:text-[16px] placeholder:leading-[24px]"
              />
              <span className="text-white p-3 border border-l-0 border-solid border-white rounded-sm rounded-l-none">
                <VscSend />
              </span>
            </div>
          </div>
          <div className="col-2 ml-[80px]">
            <h1 className="text-[20px] text-white font-medium leading-[28px]">
              Support
            </h1>
            <div>
              <ul>
                <li className="pt-3">
                  <span className="text-[16px] text-white leading-[24px]">
                    111 Bijoy sarani, Dhaka <br /> DH 1515, Bangladesh
                  </span>
                </li>
                <li className="pt-3">
                  <span className="text-[16px] text-white leading-[24px]">
                    exclusive@gmail.com
                  </span>
                </li>
                <li className="pt-3">
                  <span className="text-[16px] text-white leading-[24px]">
                    +88015-88888-9999
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 ml-[80px]">
            <h1 className="text-[20px] text-white font-medium leading-[28px]">
              Account
            </h1>
            <div>
              <ul>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    My Account
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Login / Register
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Cart
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Wishlist
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 ml-[80px]">
            <h1 className="text-[20px] text-white font-medium leading-[28px]">
              Quick Link
            </h1>
            <div>
              <ul>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Privacy Policy
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Terms of Use
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    FAQ
                  </Link>
                </li>
                <li className="pt-3">
                  <Link className="text-[16px] text-white leading-[24px]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 ml-[80px]">
            <div>
              <h1 className="text-[20px] text-white font-medium leading-[28px]">
                Quick Link
              </h1>
              <p className="text-[10px] text-white font-medium leading-[18px] mt-3">
                Save $3 with App New User Only
              </p>
            </div>
            <div className="flex">
              <div className="col-6">
                <img src="/images/qr.svg" alt="" />
              </div>
              <div className="col-6">
                <div>
                  <img src="/images/qr.svg" alt="" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
