import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchDeleteCart,
  fetchGetCart,
  fetchUpdateQuantityCart,
} from "../../redux/cart/cartSlice";
import { formattedPrice } from "../../utils/helper";
import icons from "../../utils/icons";

const { TiDelete } = icons;

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [newQuantity, setNewQuantity] = useState(0);
  useEffect(() => {
    dispatch(fetchGetCart());
  }, []);

  const handleDeleteCart = (cid) => {
    dispatch(fetchDeleteCart(cid));
    setTimeout(() => {
      dispatch(fetchGetCart());
    }, 2000);
  };

  const handleUpdateQuantityCart = (cid, newquantity) => {
    dispatch(fetchUpdateQuantityCart({ cid, newquantity }));
    setTimeout(() => {
      dispatch(fetchGetCart());
    }, 2000);
  };

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
              Storage
            </th>
            <th className="py-3 w-[10%] text-[16px] leading-[24px] font-normal">
              Quantity
            </th>
            <th className="py-3 marker:w-[20%] text-[16px] leading-[24px] font-normal">
              Subtotal
            </th>
            <th className="py-3 marker:w-[5%] text-[16px] leading-[24px] font-normal">
              Action
            </th>
          </tr>
          {cartProducts &&
            cartProducts.map((item, index) => {
              return (
                <tr className="shadow-md my-2" key={index}>
                  <td className="py-2 flex items-center justify-center gap-2">
                    <img
                      src={item?.image}
                      alt=""
                      className="w-[54px] h-[54px] object-contain"
                    />
                    <p className="py-2 text-[16px] leading-[24px] font-normal">
                      {item?.productId?.title}
                    </p>
                  </td>
                  <td className="py-2 text-center">
                    <p className="text-[16px] leading-[24px] font-normal">
                      {formattedPrice(item?.productId?.price)}
                    </p>
                  </td>
                  <td className="py-2 text-center">
                    <p className="text-[16px] leading-[24px] font-normal">
                      {item?.color}
                    </p>
                  </td>

                  <td className="py-2 text-center">
                    <p className="text-[16px] leading-[24px] font-normal">
                      {item?.storage}
                    </p>
                  </td>
                  <td className="py-2 text-center">
                    <Input
                      type="number"
                      classN="w-[50px] h-[44px] border text-center rounded-md"
                      val={newQuantity ? newQuantity : item?.quantity}
                      onCh={(e) => setNewQuantity(e.target.value)}
                    />
                  </td>
                  <td className="py-2 text-center">
                    <p className="text-[16px] leading-[24px] font-normal">
                      {formattedPrice(item?.productId?.price * item?.quantity)}
                    </p>
                  </td>
                  <td>
                    <button
                      className="text-black"
                      onClick={() => handleDeleteCart(item?._id)}
                    >
                      <TiDelete size={20} />
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateQuantityCart(item?._id, {
                          newquantity: newQuantity,
                        })
                      }
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
        <div className="my-[20px] flex items-center justify-end">
          <Link
            to="/:category"
            className="py-2 px-5 border border-black text-[16px] leading-[24px] font-medium rounded-md"
          >
            Return To Shop
          </Link>
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
