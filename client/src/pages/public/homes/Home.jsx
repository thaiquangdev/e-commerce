import { Link } from "react-router-dom";
import { siderBar } from "../../../utils/constrain";
import banner from "../../../assets/images/banner.png";
import apple from "../../../assets/images/apple.png";
import icons from "../../../utils/icons";
import { category } from "../../../utils/constrain";
import Product from "../../../components/products/Product";
import jbl_boombox from "../../../assets/images/jbl_boombox.png";
import { apiGetProducts } from "../../../api/productApi";
import { useEffect, useState } from "react";

const { FiArrowRight } = icons;

const Home = () => {
  const [productBestSeller, setProductBestSeller] = useState(null);
  const [productExplore, setProductExplore] = useState(null);
  const [productNewArrival, setProductNewArrival] = useState(null);

  const fetchProducts = async () => {
    const response = await Promise.all([
      apiGetProducts({ sort: "-sold", pageSize: 4 }),
      apiGetProducts({ sort: "-price", pageSize: 8 }),
      apiGetProducts({ sort: "-createAt", pageSize: 4 }),
    ]);
    if (response[0]?.products) setProductBestSeller(response[0]?.products);
    if (response[1]?.products) setProductExplore(response[1]?.products);
    if (response[2]?.products) setProductNewArrival(response[2]?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        <div className="mt-[50px] max-lg:max-w-970 max-[980px]:max-w-840 max-[860px]:max-w-[765px] max-[780px]:max-w-640">
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
              <ul className="grid grid-cols-6 gap-2 max-[780px]:grid-cols-3">
                {category.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className=" py-[16px] border border-line w-full text-center cursor-pointer"
                    >
                      {/* {item.image} */}
                      <span>
                        <Link to={item.title}>{item.title}</Link>
                      </span>
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
              <div className="grid grid-cols-4 gap-2 max-[780px]:grid-cols-2 max-[450px]:grid-cols-1">
                {productBestSeller?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Product data={item} />
                    </div>
                  );
                })}
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
              <div className="grid grid-cols-4 gap-2 mt-[20px] max-[780px]:grid-cols-2 max-[450px]:grid-cols-1">
                {productExplore?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Product data={item} />
                    </div>
                  );
                })}
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
              <div className="grid grid-cols-4 gap-2 mt-[20px] max-[780px]:grid-cols-2 max-[450px]:grid-cols-1">
                {productNewArrival?.map((item, index) => {
                  return (
                    <div key={index}>
                      <Product data={item} />
                    </div>
                  );
                })}
              </div>
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
