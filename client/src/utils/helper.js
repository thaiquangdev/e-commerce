const formattedPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return formattedPrice;
};

const renderRangeNumber = (start, end) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => start + index);
};

export { formattedPrice, renderRangeNumber };
