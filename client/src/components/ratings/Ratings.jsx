import icons from "../../utils/icons";

const { FaStar } = icons;

const Ratings = ({ data }) => {
  return (
    <div>
      {data &&
        data?.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center gap-2">
                <span className="p-1 px-3 bg-red rounded-full text-[20px] leading-[24px] font-semibold">
                  {item?.postedBy?.fullname[0]}
                </span>
                <span className="text-[16px] leading-[24px]">
                  {item?.postedBy?.fullname}
                </span>
              </div>
              <div className="flex items-center gap-2 my-[10px]">
                <div className="flex items-center gap-1">
                  {Array(item.star)
                    .fill()
                    .map((item) => {
                      return <FaStar key={item} className="text-yellow-star" />;
                    })}
                </div>
                <div>
                  <span className="text-[14px] leading-[24px]">
                    {item?.comment}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Ratings;
