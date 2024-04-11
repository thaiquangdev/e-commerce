import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="mt-[30px]">
      <div className="max-w-1170 mx-auto">
        <table>
          <tr className="shadow-md ">
            <th className="py-3 w-[30%] text-[16px] leading-[24px] font-normal">
              Product
            </th>
            <th className="py-3 w-[20%] text-[16px] leading-[24px] font-normal">
              Price
            </th>
            <th className="py-3 w-[10%] text-[16px] leading-[24px] font-normal">
              Color
            </th>
            <th className="py-3 w-[5%] text-[16px] leading-[24px] font-normal">
              Ram
            </th>
            <th className="py-3 w-[5%] text-[16px] leading-[24px] font-normal">
              Storage
            </th>
            <th className="py-3 w-[10%] text-[16px] leading-[24px] font-normal">
              Quantity
            </th>
            <th className="py-3 marker:w-[20%] text-[16px] leading-[24px] font-normal">
              Subtotal
            </th>
          </tr>
          <tr className="shadow-md my-2">
            <td className="py-2 flex items-center justify-center gap-1">
              <img
                src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg"
                alt=""
                className="w-[54px] h-[54px] object-contain"
              />
              <p className="py-2 text-[16px] leading-[24px] font-normal">
                iPhone 15 Pro Max
              </p>
            </td>
            <td className="py-2 text-center">
              <p className="text-[16px] leading-[24px] font-normal">
                29.990.000₫
              </p>
            </td>
            <td className="py-2 text-center">
              <p className="text-[16px] leading-[24px] font-normal">
                TITANIUM NATURAL
              </p>
            </td>
            <td className="py-2 text-center">
              <p className="text-[16px] leading-[24px] font-normal">8GB</p>
            </td>
            <td className="py-2 text-center">
              <p className="text-[16px] leading-[24px] font-normal">256GB</p>
            </td>
            <td className="py-2 text-center">
              <Input
                type="numer"
                classN="w-[50px] h-[44px] border text-center rounded-md"
                val={1}
              />
            </td>
            <td className="py-2 text-center">
              <p className="text-[16px] leading-[24px] font-normal">
                29.990.000₫
              </p>
            </td>
          </tr>
        </table>
        <div className="my-[20px] flex items-center justify-between">
          <Link
            to="/:category"
            className="py-2 px-5 border border-black text-[16px] leading-[24px] font-medium rounded-md"
          >
            Return To Shop
          </Link>
          <button
            type="submit"
            className="py-2 px-5 border border-black text-[16px] leading-[24px] font-medium rounded-md"
          >
            Update Cart
          </button>
        </div>
        <div className="mt-[20px] mb-[40px] flex  justify-between">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              classN="py-2 px-3 border border-black rounded-md "
              place="Coupon Code"
            />
            <button
              type="submit"
              className="py-2 px-3 bg-red text-white text-[16px] leading-[24px] rounded-md"
            >
              Apply Coupon
            </button>
          </div>
          <div className="w-[300px] border border-black rounded-sm py-2 px-3">
            <h3 className="text-[20px] leading-[24px] font-semibold">
              Cart Total
            </h3>
            <div className="flex items-center justify-between border-b border-b-black py-2">
              <span className="text-[16px] leading-[24px]">Subtotal: </span>
              <span className="text-[16px] leading-[24px]">29.990.000₫</span>
            </div>
            <div className="flex items-center justify-between border-b border-b-black py-2">
              <span className="text-[16px] leading-[24px]">Shipping: </span>
              <span className="text-[16px] leading-[24px]">Free</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-[16px] leading-[24px]">Total: </span>
              <span className="text-[16px] leading-[24px]">29.990.000₫</span>
            </div>
            <div className="py-2 text-center">
              <Link
                to=""
                className=" bg-red py-2 px-3 text-white text-[16px] leading-[24px] rounded-sm"
              >
                Process to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
