import { NavLink } from "react-router-dom";
import icons from "../../utils/icons";
import { formattedPrice } from "../../utils/helper";
const { FaStar } = icons;

const WishlistCart = ({ data }) => {
  return (
    <div className="p-3 border-solid border-[1px] border-[#ccc] rounded-md">
      <NavLink to={``}>
        <img
          src={data?.thumbs}
          alt=""
          className="w-full h-[260.5px] object-contain"
        />
        <div className="my-2">
          <h3 className="text-[16px] font-medium leading-6 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {data?.title}
          </h3>
          <p className="text-[14px] text-red font-medium leading-6">
            {formattedPrice(data?.price)}
            <span className="text-black line-through">
              {formattedPrice(data?.priceOld)}
            </span>
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
    </div>
  );
};

export default WishlistCart;
