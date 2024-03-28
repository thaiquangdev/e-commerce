import { Link } from "react-router-dom";
import { siderBar } from "../../utils/constrain";
import banner from "../../assets/images/banner.png";
import apple from "../../assets/images/apple.png";
import icons from "../../utils/icons";
import { category } from "../../utils/constrain";
import Product from "../../components/Product";
import jbl_boombox from "../../assets/images/jbl_boombox.png";

const { FiArrowRight } = icons;

const Home = () => {
  return (
    <div>
      <div className="max-w-1170 mx-auto">
        <div className="row">
          <div className="col-3">
            <div className=" border-r border-r-line pt-8">
              <ul className="">
                {siderBar.map((item) => {
                  return (
                    <li key={item.id} className="pb-[14px]">
                      <Link className="text-[16px] leading-[24px]">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="row pt-8 pb-8 pl-[1.7rem]">
              <div className="col-5">
                <div className="h-[344px] bg-black relative">
                  <div className="absolute top-12 left-10">
                    <div className="flex items-center gap-3">
                      <img
                        src={apple}
                        alt=""
                        className="w-[40px] h-[49px] object-cover"
                      />
                      <p className="text-white text-[16px] leading-[24px]">
                        iPhone 14 Series
                      </p>
                    </div>
                    <h1 className="text-white text-[48px] leading-[60px] font-semibold mt-2">
                      Up to 10% <br /> off Voucher
                    </h1>
                    <Link className="underline text-white flex items-center gap-3 pt-5">
                      <span>Shop Now</span>
                      <FiArrowRight size={24} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <img
                  src={banner}
                  alt=""
                  className="w-[496px] h-[344px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="flex flex-col  border-b border-line">
            <div className="py-2">
              <span className="bg-red py-1 px-2 rounded-sm"></span>
              <span className="text-red text-[16px] font-semibold pl-3">
                Categories
              </span>
            </div>
            <h3 className="text-[30px] leading-[48px] font-semibold">
              Browse By Category
            </h3>

            <div className="mt-4 mb-6">
              <ul className="flex mx-[-8px]">
                {category.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="mx-2 py-[16px] border border-line w-full text-center"
                    >
                      {/* {item.image} */}
                      <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="flex flex-col  border-b border-line">
            <div className="py-2">
              <span className="bg-red py-1 px-2 rounded-sm"></span>
              <span className="text-red text-[16px] font-semibold pl-3">
                This Month
              </span>
            </div>
            <h3 className="text-[30px] leading-[48px] font-semibold">
              Best Selling Products
            </h3>

            <div className="mt-4 mb-6">
              <div className="row row-sm">
                <div className="col-sm col-3">
                  <Product />
                </div>
                <div className="col-sm col-3">
                  <Product />
                </div>
                <div className="col-sm col-3">
                  <Product />
                </div>
                <div className="col-sm col-3">
                  <Product />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="row bg-black">
                <div className="col-6 my-4 pl-6">
                  <p className="text-green mt-5 text-[16px] font-semibold leading-[20px]">
                    Categories
                  </p>
                  <h1 className="text-white my-[20px] text-[48px] font-semibold leading-[60px]">
                    Enhance Your <br /> Music Experience
                  </h1>
                  <div className="">
                    <ul className="flex items-center gap-5">
                      <li className="bg-white w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center">
                        <span className="text-[16px] font-semibold leading-[20px] text-center">
                          5
                        </span>
                        <span className="text-[11px] leading-[18px] text-center">
                          Days
                        </span>
                      </li>
                      <li className="bg-white w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center">
                        <span className="text-[16px] font-semibold leading-[20px] text-center">
                          23
                        </span>
                        <span className="text-[11px] leading-[18px] text-center">
                          Hours
                        </span>
                      </li>
                      <li className="bg-white w-[62px] h-[62px]  rounded-full flex flex-col items-center justify-center">
                        <span className="text-[16px] font-semibold leading-[20px] text-center">
                          59
                        </span>
                        <span className="text-[11px] leading-[18px] text-center">
                          Minutes
                        </span>
                      </li>
                      <li className="bg-white  w-[62px] h-[62px]  rounded-full flex flex-col items-center justify-center">
                        <span className="text-[16px] font-semibold leading-[20px] text-center">
                          35
                        </span>
                        <span className="text-[11px] leading-[18px] text-center">
                          Seconds
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link className="rounded-sm py-2 px-6 bg-green text-white text-[16px] leading-[24px] font-medium">
                      Buy Now!
                    </Link>
                  </div>
                </div>
                <div className="col-6 my-4 px-4">
                  <img src={jbl_boombox} alt="" className="" />
                </div>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="py-2">
                <span className="bg-red py-1 px-2 rounded-sm"></span>
                <span className="text-red text-[16px] font-semibold pl-3">
                  Our Product
                </span>
              </div>
              <h3 className="text-[30px] leading-[48px] font-semibold">
                Explore Our Products
              </h3>
              <div className="row row-sm mt-2">
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
                <div className="col-sm col-3 mt-[12px]">
                  <Product />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Link className="px-6 py-3 rounded-sm bg-red text-white text-[16px] font-medium leading-[24px]">
                  View All Products
                </Link>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="py-2">
                <span className="bg-red py-1 px-2 rounded-sm"></span>
                <span className="text-red text-[16px] font-semibold pl-3">
                  Featured
                </span>
              </div>
              <h3 className="text-[30px] leading-[48px] font-semibold">
                New Arrival
              </h3>
              <div className="row row-sm">
                <div className="col-6 col-sm"></div>
                <div className="col-6 col-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
