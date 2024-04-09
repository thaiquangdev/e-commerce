import axios from "axios";

// ****************** Public API ******************
// get all products API
const productsService = async (params) => {
  const { data } = await axios.get("http://localhost:5500/api/products", {
    params,
  });

  return data;
};

const productService = async (pid) => {
  const { data } = await axios.get("http://localhost:5500/api/products/" + pid);

  return data;
};

export { productsService, productService };
