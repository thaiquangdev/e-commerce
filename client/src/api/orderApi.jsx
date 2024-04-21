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

// create order API
const apiCreateOrder = (data) =>
  axios({
    url: "http://localhost:5500/api/order/",
    method: "post",
    data,
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

export { apiCreateOrder };
