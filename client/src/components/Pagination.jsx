import React from "react";
import { usePagination } from "../hooks/usePagination";
import PaginationItem from "./PaginationItem";
import icons from "../utils/icons";

const { FaArrowLeft, FaArrowRight } = icons;

const Pagination = ({ total, limit, page, sibling }) => {
  const paginations = usePagination({
    total,
    limit,
    currentPage: page,
    sibling,
  });
  console.log(paginations);
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="p-5 w-[16px] h-[16px] text-black rounded-md bg-line  flex items-center justify-center">
        <FaArrowLeft size={20} />
      </button>
      {paginations.map((item, index) => (
        <PaginationItem key={index} content={item} />
      ))}
    </div>
  );
};

export default Pagination;
