import { useState } from "react";
import icons from "../utils/icons";

const { FaStar } = icons;

const StarRating = ({ onStarClick }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onStarClick(value);
  };

  return (
    <div className="flex items-center gap-5 mt-[10px]">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={index}
            className={
              starValue <= rating
                ? "text-yellow-400 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
            onClick={() => handleStarClick(starValue)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
