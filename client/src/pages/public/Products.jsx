import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsService } from "../../api/productApi";
import { useEffect } from "react";
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

  const fetchBannerProductByCategory = async (category) => {
    const response = await bannerProductsService({ category });
    setBannerProductsData(response);
  };

  const fetchProductByCategory = async (category) => {
    const response = await productsService({ category });
    setProductsData(response);
  };

  useEffect(() => {
    fetchBannerProductByCategory(category);
    fetchProductByCategory(category);
  }, [category]);

  return (
    <div>
      <div className="max-w-1170 mx-auto">
        <div className="row row-sm my-[30px]">
          <div className="col-8 col-sm">
            <div>
              <Slider {...settings}>
                <div>
                  <img
                    src="https://cdn.tgdd.vn/2024/03/banner/a3555-800-200-800x200-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.tgdd.vn/2024/04/banner/ip13-1200-300-1200x300.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.tgdd.vn/2024/03/banner/a38-800-200-800x200-3.png"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-4 col-sm">
            <div className="flex flex-col my-[-8px]">
              <div className="py-1">
                <img
                  src="https://cdn.tgdd.vn/2024/03/banner/sticky-m54-390x97.png"
                  alt=""
                />
              </div>
              <div className="py-1">
                <img
                  src="https://cdn.tgdd.vn/2024/04/banner/sticky-a58-390x97.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row .row-s">
          {productsData?.products.map((item) => {
            return (
              <div className="col-3 col-s pb-[8px]" key={item?._id}>
                <Product data={item} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center my-[20px]">
          <Pagination
            total={productsData?.totalProduct}
            limit={productsData?.pageSize}
            page={productsData?.pageNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
