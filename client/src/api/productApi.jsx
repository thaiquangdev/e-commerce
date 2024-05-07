import axios from "../axios.config";

// ****************** Public API ******************
// get all products API
export const apiGetProducts = async (params) =>
  axios({
    url: "http://localhost:5500/api/products/",
    method: "get",
    params,
  });

export const apiGetProduct = async (id) =>
  axios({
    url: "http://localhost:5500/api/products/" + id,
    method: "get",
  });

export const apiRatings = async (data) =>
  axios({
    url: "http://localhost:5500/api/products/ratings",
    method: "put",
    data,
  });
