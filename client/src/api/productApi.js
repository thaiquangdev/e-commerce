import axios from "axios";

// ****************** Public API ******************
// get all products API
const productsService = async (params) => {
  const { data } = await axios.get(
    "http://localhost:5500/api/products/",
    params
  );

  return data;
};

export { productsService };
