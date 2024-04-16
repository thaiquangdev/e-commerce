import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../components/Product";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { apiGetProducts } from "../../api/productApi";
import { bannerProductsService } from "../../api/bannerProductApi";
import Pagination from "../../components/Pagination";
import { brandSmartphone } from "../../utils/constrain";
import Input from "../../components/Input";
import { formattedPrice } from "../../utils/helper";

const Products = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const navigate = useNavigate();
  const location = useLocation();
  const { category } = useParams();
  const [productsData, setProductsData] = useState(null);
  const [bannerProductsData, setBannerProductsData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [valuePrice, setValuePrice] = useState([300000, 44000000]);
  const [filters, setFilters] = useState({
    brand: "",
    // typephone: "",
    ram: "",
    storage: "",
  });
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const handleOpenPrice = () => {
    setIsOpen(true);
  };

  const handleBrandChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: e.target.value,
    }));
  };

  const handleRamChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ram: e.target.value,
    }));
  };

  const handleStorageChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      storage: e.target.value,
    }));
  };

  const fetchBannerProductByCategory = async (category) => {
    try {
      const response = await bannerProductsService({ category });
      setBannerProductsData(response);
    } catch (error) {
      console.error("Error fetching banner products:", error);
    }
  };

  const fetchProductByCategory = async (params) => {
    try {
      const response = await apiGetProducts({ category, ...params });
      setProductsData(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (category) {
      navigate({
        pathname: location.pathname,
        search: createSearchParams({
          ...filters,
        }).toString(),
      });
    }
  }, [filters]);

  useEffect(() => {
    if (category) {
      fetchBannerProductByCategory(category);
      const searchObject = {
        ...Object.fromEntries([...searchParams]),
        ...filters,
      };
      fetchProductByCategory(searchObject);
    }
  }, [category, searchParams]);

  return (
    <div>
      <div className="max-w-1170 mx-auto max-lg:max-w-970 max-[980px]:max-w-840 max-[860px]:max-w-[765px] max-[780px]:max-w-640">
        <div className="flex gap-2 my-[30px]">
          <div className="w-8/12 max-[780px]:w-full">
            <div>
              <Slider {...settings}>
                {bannerProductsData?.imagesBanner?.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="w-4/12 max-[780px]:hidden">
            <div className="flex flex-col my-[-8px]">
              <div className="py-1">
                <img src={bannerProductsData?.images[0]} alt="" />
              </div>
              <div className="py-1">
                <img src={bannerProductsData?.images[1]} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-[30px] border rounded-md p-2">
          <div className="flex">
            <div className="w-10/12 pl-[20px]">
              <h2>Filter</h2>
              <div className="flex items-center gap-3 ">
                <div className="cursor-pointer p-2 border border-black flex items-center gap-2">
                  <span>Brand</span>
                  <select
                    name=""
                    id=""
                    className="border"
                    onChange={handleBrandChange}
                  >
                    {brandSmartphone
                      .find((item) => item.category === category)
                      .brand?.map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.value}
                            className="w-[30px] text-[16px] leading-[24px]"
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div
                  onClick={handleOpenPrice}
                  className="p-2 border border-black rounded-sm w-[60px] text-center cursor-pointer relative"
                >
                  <span className="text-[16px] leading-[24px] ">Price</span>
                  <div
                    className={`absolute top-11 left-[-2px] bg-white w-[500px] h-[200px] z-10 flex items-center justify-center ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="flex gap-20">
                      <div className="flex items-center gap-2">
                        <span>Min</span>
                        <Input
                          type="number"
                          val={valuePrice[0]}
                          classN="border border-[#ccc] p-1 w-[130px]"
                          onCh={(e) =>
                            setValuePrice([
                              parseInt(e.target.value),
                              valuePrice[1],
                            ])
                          }
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Max</span>
                        <Input
                          type="number"
                          val={valuePrice[1]}
                          classN="border border-[#ccc] p-1 w-[130px]"
                          onCh={(e) =>
                            setValuePrice([
                              valuePrice[0],
                              parseInt(e.target.value),
                            ])
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 border border-black rounded-sm  text-center cursor-pointer flex items-center gap-2">
                  <span>Typephone</span>
                  <select className="text-[16px] leading-[24px] border">
                    {brandSmartphone
                      .find((item) => item.category === category)
                      .typeOfPhone?.map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.value}
                            className="w-[38px] text-[16px] leading-[24px]"
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="p-2 border border-black rounded-sm  text-center cursor-pointer flex items-center gap-2">
                  <span className="">Ram</span>
                  <select
                    className="text-[16px] leading-[24px] border"
                    onChange={handleRamChange}
                  >
                    {brandSmartphone
                      .find((item) => item.category === category)
                      .ram?.map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.value}
                            className="w-[40px] text-[16px] leading-[24px]"
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="p-2 border border-black rounded-sm  text-center cursor-pointer flex gap-2 items-center">
                  <span>Storage</span>
                  <select
                    className="text-[16px] leading-[24px] border"
                    onChange={handleStorageChange}
                  >
                    {brandSmartphone
                      .find((item) => item.category === category)
                      .storage?.map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.value}
                            className="w-[40px] text-[16px] leading-[24px]"
                          >
                            {item.title}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
            <div className="w-2/12 pr-[20px]">
              <h2>Sort by</h2>
              <div className="cursor-pointer p-2 border border-black flex items-center gap-2">
                <select name="" id="">
                  <option value="">Featured</option>
                  <option value="">Best selling</option>
                  <option value="">Alphabetically, A - Z</option>
                  <option value="">Alphabetically, Z - A</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                  <option value="">Date, old to new</option>
                  <option value="">Date, new to old</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 max-lg:grid-cols-4 max-[855px]:grid-cols-3">
          {productsData?.products.map((item) => (
            <div className="" key={item?._id}>
              <Product data={item} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center my-[20px]">
          <Pagination
            total={productsData?.totalProduct}
            limit={productsData?.pageSize}
            page={productsData?.page}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
