import WishlistCart from "../../components/WishlistCart";

const Wishlist = () => {
  return (
    <div className="max-w-1170 mx-auto mt-[20px] mb-[40px]">
      <div className="grid grid-cols-4 gap-2 ">
        <div>
          <WishlistCart />
        </div>
        <div>
          <WishlistCart />
        </div>
        <div>
          <WishlistCart />
        </div>
        <div>
          <WishlistCart />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
