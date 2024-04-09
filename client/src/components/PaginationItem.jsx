import React from "react";

const PaginationItem = ({ content }) => {
  if (!Number(content))
    return (
      <div className="p-5 w-[16px] h-[16px] text-black rounded-md bg-line text-[16px] font-semibold  flex items-end justify-center">
        {content}
      </div>
    );
  return (
    <div className="p-5 w-[16px] h-[16px] text-black rounded-md bg-line text-[16px] font-semibold flex items-center justify-center">
      {content}
    </div>
  );
};

export default PaginationItem;
