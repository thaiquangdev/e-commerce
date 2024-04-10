import axios from "../../axios.config";

// ****************** Public API ******************
// get all products API
export const apiGetProducts = async (params) =>
  axios({
    url: "http://localhost:5500/api/products/",
    method: "get",
    params,
  });

export const apiGetProduct = async (pid) =>
  axios({
    url: "/v1/get-product/" + pid,
    method: "get",
  });
