import Input from "../../components/Input";
import bkash from "../../assets/images/bkash.png";
import mastercard from "../../assets/images/mastercard.png";
import nagad from "../../assets/images/nagad.png";
import visa from "../../assets/images/visa.png";

const CheckOut = () => {
  return (
    <div className="max-w-1170 mx-auto py-[30px]">
      <h1 className="text-[36px] leading-[30px] font-medium">
        Billing Details
      </h1>
      <div>
        <form action="">
          <div className="flex">
            <div className="w-6/12 pr-[30px]">
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">First Name</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">Street Address</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">Apartment, floor, etc. (optinal)</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">Town/City</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">Phone Number</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
              </div>
              <div className="flex flex-col my-[20px]">
                <label htmlFor="">Email Address</label>
                <Input
                  type="text"
                  classN="py-2 px-2 rounded-sm bg-[#F5F5F5] w-[400px]"
                />
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
                <div className="flex items-center justify-between w-[450px]">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg"
                      alt=""
                      className="w-[65px] h-[65px] object-contain"
                    />
                    <span className="text-[16px] leading-[24px]">
                      iPhone 15 Pro Max
                    </span>
                  </div>
                  <span className="text-[16px] leading-[24px]">
                    29.990.000đ
                  </span>
                </div>
                <div className="flex items-center justify-between w-[450px]">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-1-1.jpg"
                      alt=""
                      className="w-[65px] h-[65px] object-contain"
                    />
                    <span className="text-[16px] leading-[24px]">
                      iPhone 15 Pro Max
                    </span>
                  </div>
                  <span className="text-[16px] leading-[24px]">
                    29.990.000đ
                  </span>
                </div>
              </div>
              <div className="my-[20px]">
                <div className="flex items-center justify-between w-[450px] border-b py-[10px]">
                  <span className="text-[16px] leading-[24px]">Subtotal: </span>
                  <span className="text-[16px] leading-[24px]">
                    29.990.000đ
                  </span>
                </div>
                <div className="flex items-center justify-between w-[450px] border-b py-[10px]">
                  <span className="text-[16px] leading-[24px]">Shipping: </span>
                  <span className="text-[16px] leading-[24px]">Free</span>
                </div>
                <div className="flex items-center justify-between w-[450px] py-[10px]">
                  <span className="text-[16px] leading-[24px]">Total: </span>
                  <span className="text-[16px] leading-[24px]">
                    29.990.000đ
                  </span>
                </div>
              </div>
              <div className="my-[20px]">
                <div className="flex items-center justify-between w-[450px]">
                  <div className="flex items-center gap-2">
                    <Input type="radio" />
                    <span className="text-[16px] leading-[24px]">Bank</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={bkash}
                      alt=""
                      className="w-[42px] h-[28px] object-contain"
                    />
                    <img
                      src={visa}
                      alt=""
                      className="w-[42px] h-[28px] object-contain"
                    />
                    <img
                      src={mastercard}
                      alt=""
                      className="w-[42px] h-[28px] object-contain"
                    />
                    <img
                      src={nagad}
                      alt=""
                      className="w-[42px] h-[28px] object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="my-[20px]">
                <div className="flex items-center gap-3">
                  <Input
                    type="text"
                    place="Coupon Code"
                    classN="border border-black px-3 py-2 rounded-sm"
                  />
                  <button className="bg-red text-white py-[9px] px-[30px] rounded-sm">
                    Apply Coupon
                  </button>
                </div>
              </div>
              <div className="my-[20px]">
                <button className="bg-red text-white py-[9px] px-[30px] rounded-sm">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
