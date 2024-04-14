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
  // Lấy dữ liệu đã lưu trong Local Storage với key là "persist:root"
  const persistState = JSON.parse(localStorage.getItem("persist:root"));
  console.log(persistState);

  // Kiểm tra xem dữ liệu có tồn tại không
  if (persistState) {
    // Lấy trạng thái của user từ persistedState
    const userState = JSON.parse(persistState.user);
    console.log(userState);

    // Lấy token từ trạng thái của user
    if (userState && userState.user && userState.user.data) {
      const token = userState.user.data.token;
      return token;
    } else {
      console.error("Không tìm thấy dữ liệu người dùng trong Local Storage.");
      return null;
    }
  } else {
    console.error("Không tìm thấy dữ liệu trong Local Storage.");
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
const apiDeleteCart = (cid) =>
  axios({
    url: `http://localhost:5500/api/users/delete-cart/${cid}`,
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
  apiUpdateQuantityCart,
  apiAddToWishList,
  apiGetToWishList,
};
