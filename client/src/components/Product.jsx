import { Link, NavLink } from "react-router-dom";
import icons from "../utils/icons";
import { formattedPrice } from "../utils/helper";
import { useDispatch } from "react-redux";
import { fetchAddToWishlist } from "../redux/wishlist.jsx/wishlistSlice";
import { useState } from "react";
import QuickViewProduct from "./QuickViewProduct";

const { FaStar, FaRegEye, FaRegHeart, IoCartOutline } = icons;

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [isQuickView, setIsQuickView] = useState(false);

  const handleAddToWishlist = (pid) => {
    dispatch(fetchAddToWishlist(pid));
  };

  return (
    <div className="p-3 border-solid border-[1px] border-[#ccc] rounded-md">
      <NavLink
        to={`/${data?.category}/${data?._id}`}
        className="relative overflow-hidden group"
      >
        <img
          src={data?.thumbs}
          alt=""
          className="w-full h-[260.5px] object-contain "
        />
        <div className=" group-hover:flex group-hover:right-0 flex-col gap-2 absolute top-0 right-[-50px]  hidden">
          <Link
            onClick={() => handleAddToWishlist(data?._id)}
            className="bg-white rounded-full p-2 text-black border border-[#ccc] hover:bg-red hover:text-white hover:border-white"
          >
            <FaRegHeart size={16} />
          </Link>
          <Link
            onClick={() => setIsQuickView(true)}
            className="bg-white rounded-full p-2 text-black border border-[#ccc] hover:bg-red hover:text-white hover:border-white"
          >
            <FaRegEye size={16} />
          </Link>
          <Link className="bg-white rounded-full p-2 text-black border border-[#ccc] hover:bg-red hover:text-white hover:border-white">
            <IoCartOutline size={16} />
          </Link>
        </div>
        <div className="my-2">
          <h3 className="text-[16px] font-medium leading-6 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {data?.title}
          </h3>
          <p className="text-[14px] text-red font-medium leading-6">
            {formattedPrice(data?.price)}
            <span className="text-black line-through">34.990.000₫</span>
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-star" />
            <FaStar className="text-yellow-star" />
            <FaStar className="text-yellow-star" />
            <FaStar className="text-yellow-star" />
            <FaStar className="text-yellow-star" />
          </span>
          <span className="text-[12px] font-semibold leading-[21px]">
            ({data?.sold})
          </span>
        </div>
      </NavLink>
      {isQuickView && (
        <QuickViewProduct data={data} onClose={() => setIsQuickView(false)} />
      )}
    </div>
  );
};

export default Product;
