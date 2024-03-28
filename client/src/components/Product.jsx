import { NavLink } from "react-router-dom";
import icons from "../utils/icons";

const { FaStar } = icons;

const Product = () => {
  return (
    <div className="p-3 border-solid border-[1px] border-[#ccc] rounded-md">
      <NavLink>
        <img
          src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
        <div className="my-2">
          <h3 className="text-[18px] font-medium leading-6">
            iPhone 15 Pro Max
          </h3>
          <p className="text-[14px] text-red font-medium leading-6">
            30.990.000₫{" "}
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
            (100)
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default Product;
