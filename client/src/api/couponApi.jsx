import axios from "../axios.config";

const apiAppyCoupon = (name) =>
  axios({
    url: "http://localhost:5500/api/coupon/apply-coupon",
    method: "post",
    data: { name },
  });

export { apiAppyCoupon };
