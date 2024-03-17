import { Link } from "react-router-dom";
import { siderBar } from "../../utils/constrain";
import banner from "../../assets/images/banner.png";
import apple from "../../assets/images/apple.png";
import icons from "../../utils/icons";
import { category } from "../../utils/constrain";

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
              <ul className="row mx-[-8px]">
                {category.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="mx-2 py-[16px] border border-line w-full"
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

            <div className="mt-4 mb-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
