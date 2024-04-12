import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../components/Product";
import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiGetProducts } from "../../api/productApi";
import { bannerProductsService } from "../../api/bannerProductApi";
import Pagination from "../../components/Pagination";

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

  const { category } = useParams();
  const [productsData, setProductsData] = useState(null);
  const [bannerProductsData, setBannerProductsData] = useState(null);
  const [searchParams] = useSearchParams();

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
      fetchBannerProductByCategory(category);
      const searchObject = Object.fromEntries([...searchParams]);
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
