import { useEffect, useState } from "react";
import { formattedPrice } from "../../utils/helper";
import Input from "../inputs/Input";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { fetchUpdateCart } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const QuickViewProduct = ({ data, onClose }) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [storage, setStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(data?.colors[0] || null);
  const [selectedStorage, setSelectedStorage] = useState(
    data?.internal[0] || null
  );

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
    setSelectedColor(color);
  };

  // Hàm xử lý sự kiện khi chọn màu sắc
  const handleStorageSelection = (storage) => {
    setStorage(storage);
    setSelectedStorage(storage);
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
    if (data?.images.length > 0) {
      setSelectedImage(data?.images[0]); // Đặt ảnh đầu tiên làm ảnh mặc định
    }
  }, [data]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md  flex gap-2 w-[800px] h-[500px]">
        <div className="w-6/12">
          <img
            src={selectedImage}
            alt=""
            className="w-full h-[350px] object-contain"
          />
          <div className="w-full">
            <div className="">
              <Slider {...settings}>
                {data?.images?.map((item, index) => {
                  return (
                    <div className="w-3/12 border rounded-sm" key={index}>
                      <img
                        src={item}
                        alt=""
                        className="w-[80px] h-[80px] object-contain"
                        onClick={() => handleImageClick(item)}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <div className="w-6/12 pl-[10px]">
          <h2 className="text-[16px] font-semibold leading-[24px]">
            {data?.title}
          </h2>
          <div className="pt-[10px] pl-[16px]">
            <ul>
              {data?.description?.map((item, index) => {
                if (index < 4) {
                  return (
                    <li key={index} className="text-[12px] list-disc">
                      {item}
                    </li>
                  );
                } else if (index === 4) {
                  return (
                    <li key={index} className="text-[12px] list-disc">
                      {item} ...
                    </li>
                  );
                }
                return null; // Đảm bảo chỉ render tối đa 6 item
              })}
            </ul>
          </div>

          <p className="text-[18px] font-medium leading-[24px] pt-[10px]">
            {formattedPrice(data?.price)}
          </p>
          <div>
            <button
              onClick={decreaseQuantity}
              className="py-[4px] px-3 border border-r-0 rounded-tl-md rounded-bl-md"
            >
              -
            </button>
            <Input
              type="number"
              val={quantity}
              classN="border w-[80px] p-[4px] text-center"
            />
            <button
              onClick={increaseQuantity}
              className="py-[4px] px-3 border border-l-0 rounded-tr-md rounded-br-md  text-black"
            >
              +
            </button>
          </div>
          <div className="py-[5px]">
            <p>Colors:</p>
            <ul className="flex items-center gap-1">
              {data?.colors?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`border p-1 rounded-md ${
                      selectedColor === item ? "border-red text-red" : ""
                    }`}
                  >
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
          <div className="py-[5px]">
            <p>Storages:</p>
            <ul className="flex items-center gap-1">
              {data?.internal?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`border w-[70px] text-center p-1 rounded-md ${
                      selectedStorage === item ? "border-red text-red" : ""
                    }`}
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
          <div className="mt-[5px]">
            <Link className="bg-red py-1 px-6 rounded-md">
              <button
                onClick={() =>
                  handleAddToCart(
                    data?._id,
                    color,
                    storage,
                    quantity,
                    data?.images[0]
                  )
                }
                className="text-[16px] font-semibold leading-[24px] text-white"
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 p-2 text-lg"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      {/* <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div> */}
    </div>
  );
};

export default QuickViewProduct;
