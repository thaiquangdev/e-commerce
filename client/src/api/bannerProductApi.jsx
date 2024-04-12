import axios from "../../axios.config";

// ****************** Public API ******************
// get all banner products API

const bannerProductsService = async (params) =>
  axios({
    url: "http://localhost:5500/api/bannerproduct/",
    method: "get",
    params,
  });

export { bannerProductsService };
