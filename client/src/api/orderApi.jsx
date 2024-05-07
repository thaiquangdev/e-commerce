import axios from "../axios.config";

// create order API
const apiCreateOrder = (name) =>
  axios({
    url: "http://localhost:5500/api/order/",
    method: "post",
    data: name,
  });

export { apiCreateOrder };
