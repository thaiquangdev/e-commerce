import axios from "../axios.config";

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

// update cart API
const apiUpdateCart = (data) =>
  axios({
    url: "http://localhost:5500/api/users/update-cart",
    method: "post",
    data,
  });

// get cart API
const apiGetCart = () =>
  axios({
    url: "http://localhost:5500/api/users/cart",
    method: "get",
  });

// delete cart API
const apiDeleteCart = () =>
  axios({
    url: `http://localhost:5500/api/users/delete-cart/`,
    method: "delete",
  });

// delete all cart API
const apiDeleteAllCart = () =>
  axios({
    url: `http://localhost:5500/api/users/delete-all-cart/`,
    method: "delete",
  });

// update quantity cart API
const apiUpdateQuantityCart = (cid, newquantity) =>
  axios({
    url: `http://localhost:5500/api/users/update-qty-card/${cid}`,
    method: "put",
    data: newquantity,
  });

// add to wishlist API
const apiAddToWishList = (pid) =>
  axios({
    url: `http://localhost:5500/api/users/${pid}`,
    method: "put",
  });

// add to wishlist API
const apiGetToWishList = () =>
  axios({
    url: `http://localhost:5500/api/users/wishlist`,
    method: "get",
  });

// logout user API
const apiLogout = () =>
  axios({
    url: "http://localhost:5500/api/users/logout",
    method: "get",
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
