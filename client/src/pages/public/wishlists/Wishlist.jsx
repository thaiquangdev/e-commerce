import { useEffect, useState } from "react";
import { apiGetToWishList } from "../../../api/userApi";
import WishlistCart from "../../../components/products/WishlistCart";

const Wishlist = () => {
  const [product, setProduct] = useState(null);
  const fetchGetToWishlist = async () => {
    const response = await apiGetToWishList();
    if (response) {
      setProduct(response?.wishlist);
    }
  };

  useEffect(() => {
    fetchGetToWishlist();
  }, []);

  return (
    <div className="max-w-1170 mx-auto mt-[20px] mb-[40px]">
      <div className="grid grid-cols-4 gap-2 ">
        {product?.map((item, index) => {
          return (
            <div key={index}>
              <WishlistCart data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
