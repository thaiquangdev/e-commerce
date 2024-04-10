import axios from "axios";

// ****************** Public API ******************
// get all banner products API
const bannerProductsService = async (params) => {
  const { data } = await axios.get("http://localhost:5500/api/bannerproduct", {
    params: params,
  });

  return data;
};

export { bannerProductsService };
