import axios from "../../axios.config";

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  } else {
    console.error("Không tìm thấy dữ liệu người dùng trong Local Storage.");
    return null;
  }
};

const apiAppyCoupon = (name) =>
  axios({
    url: "http://localhost:5500/api/coupon/apply-coupon",
    method: "post",
    data: { name },
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

export { apiAppyCoupon };
