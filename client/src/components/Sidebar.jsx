import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import icons from "../utils/icons";

const {
  RiGitRepositoryPrivateFill,
  RiLogoutBoxLine,
  MdDashboard,
  FaRegListAlt,
  IoSettingsOutline,
} = icons;

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <div className="">
      <div className="mt-[30px]">
        <h3 className="font-medium text-[16px] leading-[24px]">
          Manager My Account
        </h3>
        <ul className="my-[10px] pl-[20px]">
          <li className="py-1 font-normal text-[14px] leading-[24px] hover:text-red cursor-pointer">
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li className="py-1 font-normal text-[14px] leading-[24px] hover:text-red cursor-pointer">
            <Link to="/profile">Address Book</Link>
          </li>
          <li className="py-1 font-normal text-[14px] leading-[24px] hover:text-red cursor-pointer">
            <Link to="/profile">My Payment Options</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-[16px] leading-[24px]">My Orders</h3>
        <ul className="my-[10px] pl-[20px]">
          <li className="py-1 font-normal text-[14px] leading-[24px] hover:text-red cursor-pointer">
            <Link>My Returns</Link>
          </li>
          <li className="py-1 font-normal text-[14px] leading-[24px] hover:text-red cursor-pointer">
            <Link>My Cancellations</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-[16px] leading-[24px] hover:text-red cursor-pointer">
          <Link to="/wishlist">My WishList</Link>
        </h3>
      </div>
      <button className="btn">Log out</button>
    </div>
  );
};

export default Sidebar;
