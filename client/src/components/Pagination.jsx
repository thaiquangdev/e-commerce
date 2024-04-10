import { usePagination } from "../hooks/usePagination";
import PaginationItem from "./PaginationItem";
import icons from "../utils/icons";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { createSearchParams, useNavigate, useLocation } from "react-router-dom";

const { FaArrowLeft, FaArrowRight } = icons;

const Pagination = ({ total, limit, page, sibling }) => {
  const paginations = usePagination({
    total,
    currentPage: page,
    limit,
    sibling,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const handleNextPage = () => {
    if (+page >= Math.ceil(+total / +limit)) return;
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ page: page + 1 }).toString(),
    });
  };

  const handlePreviosPage = () => {
    if (+page <= 1 || !page) return;
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ page: page - 1 }).toString(),
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePreviosPage}
        disabled={!(page || +page === 1)}
        className={clsx(
          "p-5 w-[16px] h-[16px] text-white rounded-md bg-red flex items-center justify-center",
          (!page || +page === 1) && "opacity-50 cursor-not-allowed"
        )}
      >
        <span>
          <FaArrowLeft size={16} />
        </span>
      </button>
      {paginations?.map((item, index) => (
        <PaginationItem
          page={searchParams.get("page")}
          key={index}
          content={item}
        />
      ))}
      <button
        onClick={handleNextPage}
        className={clsx(
          "p-5 w-[16px] h-[16px] text-white rounded-md bg-red flex items-center justify-center",
          +page === Math.ceil(+total / +limit) &&
            "opacity-50 cursor-not-allowed"
        )}
      >
        <span>
          <FaArrowRight size={16} />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
