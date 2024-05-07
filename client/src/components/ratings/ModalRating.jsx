import { useState } from "react";
import StarRating from "./StarRating";

const ModalRating = ({ onReviewChange, onStarClick }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewChange = (e) => {
    setComment(e.target.value);
    onReviewChange(e.target.value);
  };

  const handleStarClick = (value) => {
    setRating(value);
    onStarClick(value);
  };
  return (
    <div>
      <textarea
        rows={5}
        cols={10}
        className="w-full my-[20px] text-black p-3"
        placeholder="Please share some thoughts about the product"
        value={comment}
        onChange={handleReviewChange}
      />
      <div className="mb-[20px]">
        <h2>How do you like this product</h2>
        <div className="flex items-center justify-center">
          <StarRating onStarClick={handleStarClick} />
        </div>
      </div>
    </div>
  );
};

export default ModalRating;
