import { useState, useEffect } from "react";
import { apiGetProduct } from "../../api/productApi";
import { useParams, Link } from "react-router-dom";
import icons from "../../utils/icons";
import { formattedPrice } from "../../utils/helper";
import Input from "../../components/Input";
import Product from "../../components/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { fetchUpdateCart } from "../../redux/cart/cartSlice";

const { FaStar, FaRegHeart } = icons;

const ProductDetail = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch();
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [storage, setStorage] = useState(null);

  const fetchProductData = async () => {
    try {
      const response = await apiGetProduct(pid);
      setProduct(response);
      if (response?.product?.images.length > 0) {
        setSelectedImage(response.product.images[0]);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  // Hàm xử lý khi nhấn nút tăng số lượng
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + 1));
  };

  // Hàm xử lý khi nhấn nút giảm số lượng
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  // hàm chọn ảnh
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Hàm xử lý sự kiện khi chọn màu sắc
  const handleColorSelection = (color) => {
    setColor(color);
  };

  // Hàm xử lý sự kiện khi chọn màu sắc
  const handleStorageSelection = (storage) => {
    setStorage(storage);
  };

  // hàm thêm giỏ hàng
  const handleAddToCart = (product, color, storage, quantity, image) => {
    dispatch(
      fetchUpdateCart({
        productId: product,
        color,
        storage,
        quantity,
        image,
      })
    );
  };

  useEffect(() => {
    fetchProductData();
  }, [pid]);

  useEffect(() => {
    if (product?.product?.images.length > 0) {
      setSelectedImage(product.product.images[0]); // Đặt ảnh đầu tiên làm ảnh mặc định
    }
  }, [product]);

  return (
    <div>
      <div className="max-w-1170 mx-auto">
        <div className="row">
          <div className="col-7">
            <div className="mt-[30px]">
              <div className="">
                <div className="mr-[40px]">
                  <div className="border rounded-sm">
                    <img
                      src={selectedImage}
                      alt=""
                      className="w-[full] h-[full] object-contain "
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full mt-4  pr-[20px]">
                  <div className="">
                    <Slider {...settings}>
                      {product?.product?.images.map((item, index) => {
                        return (
                          <div key={index}>
                            <img
                              src={item}
                              alt=""
                              className="w-[110px] h-[100px] object-contain border cursor-pointer"
                              onClick={() => handleImageClick(item)}
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="mt-[30px]">
              <h2 className="pb-[8px] text-[24px] leading-[24px] font-semibold">
                {product?.product?.title}
              </h2>
              <div className="flex items-center pb-[8px]">
                <div className="flex items-center gap-3 border-r pr-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[12px] text-yellow-star" />
                    <FaStar className="text-[12px] text-yellow-star" />
                    <FaStar className="text-[12px] text-yellow-star" />
                    <FaStar className="text-[12px] text-yellow-star" />
                    <FaStar className="text-[12px] text-yellow-star" />
                  </div>
                  <span className="text-[14px] leading-[24px]">
                    (150 Reviews)
                  </span>
                </div>
                <div className="pl-3">
                  {product?.product?.stock > 0 ? (
                    <span className="text-[#00FF66] text-[14px] leading-[24px]">
                      In stock
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 pb-[8px]">
                <p className="text-[24px] leading-[24px]">
                  {formattedPrice(product?.product?.price)}
                </p>
                <span className="text-[18px] leading-[24px] line-through text-gray-500">
                  {formattedPrice(product?.product?.priceOld)}
                </span>
              </div>
              <div className="pb-[8px] border-b">
                <ul>
                  {product?.product?.description.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="text-[14px]">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="py-[8px]">
                <p>Colors:</p>
                <ul className="flex items-center gap-1">
                  {product?.product?.colors.map((item, index) => {
                    return (
                      <li key={index} className="border p-2 rounded-md">
                        <button
                          className="text-[12px]"
                          onClick={() => handleColorSelection(item)}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="py-[8px]">
                <p>Storages:</p>
                <ul className="flex items-center gap-1">
                  {product?.product?.internal.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="border w-[70px] text-center p-2 rounded-md"
                      >
                        <button
                          onClick={() => handleStorageSelection(item)}
                          className="text-[12px] "
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-[8px]">
                <div>
                  <button
                    onClick={decreaseQuantity}
                    className="py-1 px-3 border border-r-0 rounded-tl-md rounded-bl-md"
                  >
                    -
                  </button>
                  <Input
                    type="number"
                    val={quantity}
                    classN="border  p-1 text-center"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="py-1 px-3 border border-l-0 rounded-tr-md rounded-br-md bg-red text-white"
                  >
                    +
                  </button>
                </div>
                <div>
                  <Link className="bg-red py-1 px-6 rounded-md">
                    <button
                      onClick={() =>
                        handleAddToCart(
                          product?.product?._id,
                          color,
                          storage,
                          quantity,
                          product?.product?.images[0]
                        )
                      }
                      className="text-[16px] font-semibold leading-[24px] text-white"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
                <div>
                  <Link className="  ">
                    <FaRegHeart className="text-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[40px]">
          <span className="bg-red py-1 px-2 rounded-sm"></span>
          <span className="text-red text-[16px] font-semibold pl-3">
            Related Item
          </span>
        </div>
        <div className=" mt-[20px] my-[40px]">
          <div className="row row-sm">
            {product?.relatedProduct.map((item, index) => {
              return (
                <div className="col-3 col-sm" key={index}>
                  <Product data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
