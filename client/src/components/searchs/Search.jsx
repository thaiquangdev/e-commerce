import Input from "../inputs/Input";
import icons from "../../utils/icons";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { apiGetProducts } from "../../api/productApi";
import { Link } from "react-router-dom";

const { FiSearch } = icons;

const Search = () => {
  const [isTitle, setIsTitle] = useState(null);
  const [data, setData] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const debounceDelay = 300;
  const debounceSearchItem = useDebounce(isTitle, debounceDelay);

  const fetchProductBySearch = async () => {
    const response = await apiGetProducts({ search: debounceSearchItem });
    if (response) {
      setData(response?.products);
    }
  };

  const handleHidden = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    fetchProductBySearch();
  }, [debounceSearchItem]);

  return (
    <div className="flex items-center justify-center border relative">
      <Input
        type="text"
        place="What are you looking for?"
        classN="py-1 px-2 text-[12px] w-[200px] placeholder:text-[12px] placeholder:leading-[8px] bg-input-bg"
        val={isTitle}
        onCh={(e) => setIsTitle(e.target.value)}
      />
      <span className="bg-input-bg p-2">
        <FiSearch />
      </span>
      <div
        className={`absolute top-8 bg-white w-[233px] z-10 ${
          isHidden ? "hidden" : ""
        }`}
      >
        {isTitle &&
          data?.map((item) => {
            return (
              <Link
                to={`/${item?.category}/${item?._id}`}
                key={item?._id}
                className="p-2 flex items-center"
                onClick={handleHidden}
              >
                <img
                  src={item?.thumbs}
                  alt=""
                  className="w-[50px] h-[50px] object-contain"
                />
                <span className="text-[14px] pl-2">{item?.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
