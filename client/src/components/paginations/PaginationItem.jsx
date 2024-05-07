import clsx from "clsx";
import { createSearchParams, useNavigate, useLocation } from "react-router-dom";

const PaginationItem = ({ content, page }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = () => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ page: content }).toString(),
    });
  };

  if (!Number(content)) {
    return (
      <div className="w-[16px] h-[16px] p-5 flex justify-center items-center bg-line rounded-md cursor-pointer">
        {content}
      </div>
    );
  }
  return (
    <button
      onClick={handleChange}
      className={clsx(
        "w-[16px] h-[16px] p-5 flex justify-center items-center bg-line rounded-md cursor-pointer",
        !page && content == 1 && "bg-red text-white",
        +page && content == +page && "bg-red text-white"
      )}
    >
      {content}
    </button>
  );
};

export default PaginationItem;
