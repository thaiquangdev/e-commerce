import axios from "../../axios.config";

// ****************** Public API ******************
// register user API
const apiRegister = (data) =>
  axios({
    url: "http://localhost:5500/api/users/",
    method: "post",
    data,
  });

// login user API
const apiLogin = (data) =>
  axios({
    url: "http://localhost:5500/api/users/login",
    method: "post",
    data,
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

// update cart API
const apiUpdateCart = (data) =>
  axios({
    url: "http://localhost:5500/api/users/update-cart",
    method: "post",
    data,
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// get cart API
const apiGetCart = () =>
  axios({
    url: "http://localhost:5500/api/users/cart",
    method: "get",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// delete cart API
const apiDeleteCart = () =>
  axios({
    url: `http://localhost:5500/api/users/delete-cart/`,
    method: "delete",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// delete all cart API
const apiDeleteAllCart = () =>
  axios({
    url: `http://localhost:5500/api/users/delete-all-cart/`,
    method: "delete",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// update quantity cart API
const apiUpdateQuantityCart = (cid, newquantity) =>
  axios({
    url: `http://localhost:5500/api/users/update-qty-card/${cid}`,
    method: "put",
    data: newquantity,
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// add to wishlist API
const apiAddToWishList = (pid) =>
  axios({
    url: `http://localhost:5500/api/users/${pid}`,
    method: "put",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// add to wishlist API
const apiGetToWishList = () =>
  axios({
    url: `http://localhost:5500/api/users/wishlist`,
    method: "get",
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    },
  });

// logout user API
const apiLogout = (user) =>
  axios({
    url: "http://localhost:5500/api/users/logout",
    method: "put",
    headers: {
      Authorization: `Bearer ${user}`,
    },
  });

export {
  apiRegister,
  apiLogin,
  apiLogout,
  apiUpdateCart,
  apiGetCart,
  apiDeleteCart,
  apiDeleteAllCart,
  apiUpdateQuantityCart,
  apiAddToWishList,
  apiGetToWishList,
};
