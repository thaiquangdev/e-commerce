import Input from "../inputs/Input";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import QrCode from "../../assets/images/Qrcode.png";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/googleplay.png";

const { VscSend, RiFacebookLine, FaInstagram, FiTwitter, RiLinkedinLine } =
  icons;

const Footer = () => {
  return (
    <div className="bg-black mt-[30px]">
      <div className="max-w-1170 mx-auto py-[80px] max-lg:max-w-970 max-[980px]:max-w-840 max-[860px]:max-w-[765px] max-[780px]:max-w-640">
        <div className="grid grid-cols-5 gap-2 max-lg:grid-cols-4 max-[780px]:grid-cols-3 max-[675px]:grid-cols-2 max-[450px]:grid-cols-1">
          <div className="">
            <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
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
            <div className="mt-3 flex items-center max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
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
          <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
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
          <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
            <h1 className="text-[20px] text-white font-medium leading-[28px]">
              Account
            </h1>
            <div className="">
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
          <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
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
          <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:justify-center max-[450px]:items-center">
            <div>
              <h1 className="text-[20px] text-white font-medium leading-[28px]">
                Quick Link
              </h1>
              <p className="text-[10px] text-white font-medium leading-[18px] mt-3">
                Save $3 with App New User Only
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="">
                <img
                  src={QrCode}
                  alt=""
                  className="w-[76px] h-[76px] object-contain"
                />
              </div>
              <div className="">
                <img
                  src={googleplay}
                  alt=""
                  className="w-[120px] h-[40px] object-contain"
                />
                <img
                  src={appstore}
                  alt=""
                  className="w-[120px] h-[40px] object-contain"
                />
              </div>
            </div>
            <div className="">
              <ul className="flex items-center gap-6 mt-3">
                <li className="text-white">
                  <RiFacebookLine size={24} />
                </li>
                <li className="text-white">
                  <FiTwitter size={24} />
                </li>
                <li className="text-white">
                  <FaInstagram size={24} />
                </li>
                <li className="text-white">
                  <RiLinkedinLine size={24} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
