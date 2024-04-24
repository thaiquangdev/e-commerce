import axios from "../../axios.config";

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

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  } else {
    console.error("Không tìm thấy dữ liệu người dùng trong Local Storage.");
    return null;
  }
};

export const apiRatings = async (data) =>
  axios({
    url: "http://localhost:5500/api/products/ratings",
    method: "put",
    data,
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });
