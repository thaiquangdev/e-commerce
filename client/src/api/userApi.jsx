import axios from "axios";

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

// logout user API
const apiLogout = (user) =>
  axios({
    url: "http://localhost:5500/api/users/logout",
    method: "put",
    headers: {
      Authorization: `Bearer ${user}`,
    },
  });

export { apiRegister, apiLogin, apiLogout };
