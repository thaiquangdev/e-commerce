import { useEffect, useRef } from "react";
import icons from "../../utils/icons";

const { FaStar } = icons;

const Votebar = ({ number, ratingCount, ratingTotal }) => {
  const percentRef = useRef();
  useEffect(() => {
    percentRef.current.style.cssText = `right: ${
      100 - Math.round((ratingCount * 100) / ratingTotal)
    }%`;
  }, [ratingCount, ratingTotal]);
  return (
    <div className="flex items-center gap-2">
      <div className="w-2/12 flex items-center justify-center gap-1 text-sm">
        <span>{number}</span>
        <FaStar color="orange" />
      </div>
      <div className="w-8/12">
        <div className="w-full h-[5px] bg-gray-200 rounded-l-full rounded-r-full relative">
          <div ref={percentRef} className="absolute inset-0 bg-red"></div>
        </div>
      </div>
      <div className="w-2/12">
        <div className="text-xs text-400">{`${ratingCount || 0} reviews`}</div>
      </div>
    </div>
  );
};

export default Votebar;
