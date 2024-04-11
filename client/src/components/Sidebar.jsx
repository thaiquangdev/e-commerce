import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import icons from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogout } from "../redux/user/userSlice";

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
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(fetchUserLogout(user?.data?.token))
      .unwrap()
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

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
      <button className="btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
