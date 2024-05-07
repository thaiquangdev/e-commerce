import Input from "../../../components/inputs/Input.jsx";
import { useSelector } from "react-redux";
import { formattedPrice } from "../../../utils/helper";
import { useState } from "react";
import { useFormik } from "formik";
import { shippingSchema } from "../../../utils/validation";
import Paypal from "../../../components/Paypals/Paypal.jsx";

const CheckOut = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [shippingInfo, setShippingInfo] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      address: "",
      state: "",
      city: "",
      phoneNumber: "",
      email: "",
      apartment: "",
      postalCode: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
    },
  });

  return (
    <div className="max-w-1170 mx-auto py-[30px]">
      <h1 className="text-[36px] leading-[30px] font-medium">
        Billing Details
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex">
            <div className="w-6/12 pr-[30px]">
              <div className="flex flex-col my-[20px]">
                <label htmlFor="fullname">Name</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                  onCh={formik.handleChange}
                  onBl={formik.handleBlur}
                  val={formik.values.fullname}
                  name="fullname"
                />
                {formik.errors.fullname && (
                  <small className="text-red">{formik.errors.fullname}</small>
                )}
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="address">Street Address</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                  onCh={formik.handleChange}
                  onBl={formik.handleBlur}
                  val={formik.values.address}
                  name="address"
                />
                {formik.errors.address && (
                  <small className="text-red">{formik.errors.address}</small>
                )}
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="apartment">
                  Apartment, floor, etc. (optinal)
                </label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                  onCh={formik.handleChange}
                  onBl={formik.handleBlur}
                  val={formik.values.apartment}
                  name="apartment"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                  onCh={formik.handleChange}
                  onBl={formik.handleBlur}
                  val={formik.values.phoneNumber}
                  name="phoneNumber"
                />
                {formik.errors.phoneNumber && (
                  <small className="text-red">
                    {formik.errors.phoneNumber}
                  </small>
                )}
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="email">Email Address</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                  onCh={formik.handleChange}
                  onBl={formik.handleBlur}
                  val={formik.values.email}
                  name="email"
                />
                {formik.errors.email && (
                  <small className="text-red">{formik.errors.email}</small>
                )}
              </div>
              <div className="flex items-center gap-2 my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="city">Town/City</label>
                  <Input
                    type="text"
                    classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[196px]"
                    onCh={formik.handleChange}
                    onBl={formik.handleBlur}
                    val={formik.values.city}
                    name="city"
                  />
                  {formik.errors.city && (
                    <small className="text-red">{formik.errors.city}</small>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="postalCode">Zipcode</label>
                  <Input
                    type="text"
                    classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[196px]"
                    onCh={formik.handleChange}
                    onBl={formik.handleBlur}
                    val={formik.values.postalCode}
                    name="postalCode"
                  />
                  {formik.errors.postalCode && (
                    <small className="text-red">
                      {formik.errors.postalCode}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Input type="checkbox" />
                <span>
                  Save this information for faster check-out next time
                </span>
              </div>
            </div>
            <div className="w-6/12 pl-[30px]">
              <div className="my-[20px]">
                {cartProducts?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-between w-[450px]"
                      key={index}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={item?.image}
                          alt=""
                          className="w-[65px] h-[65px] object-contain"
                        />
                        <span className="text-[16px] leading-[24px]">
                          {item?.productId?.title}
                        </span>
                      </div>
                      <span className="text-[16px] leading-[24px]">
                        {formattedPrice(item?.productId?.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="my-[20px]">
                <div className="flex items-center justify-between w-[450px] border-b py-[10px]">
                  <span className="text-[16px] leading-[24px]">Subtotal: </span>
                  <span className="text-[16px] leading-[24px]">
                    {formattedPrice(totalAmount)}
                  </span>
                </div>
                <div className="flex items-center justify-between w-[450px] border-b py-[10px]">
                  <span className="text-[16px] leading-[24px]">Shipping: </span>
                  <span className="text-[16px] leading-[24px]">Free</span>
                </div>
                <div className="flex items-center justify-between w-[450px] py-[10px]">
                  <span className="text-[16px] leading-[24px]">Total: </span>
                  <span className="text-[16px] leading-[24px]">
                    {formattedPrice(totalAmount)}
                  </span>
                </div>
              </div>

              <div className="my-[20px]">
                <button
                  type="submit"
                  className="bg-red text-white py-[9px] px-[30px] rounded-sm"
                >
                  Place Order
                </button>
              </div>
              <div>
                {shippingInfo && (
                  <Paypal
                    payload={{
                      shippingInfo: shippingInfo,
                      orderItems: cartProducts,
                      totalPrice: cartProducts.reduce(
                        (sum, item) =>
                          item?.productId?.price * item?.quantity + sum,
                        0
                      ),
                    }}
                    amount={Math.round(
                      cartProducts.reduce(
                        (sum, item) =>
                          item?.productId?.price * item?.quantity + sum,
                        0
                      ) / 23500
                    )}
                  />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
