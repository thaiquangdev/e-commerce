import axios from "axios";

// ****************** Public API ******************
// login user API
const loginService = async (user) => {
  const { data } = await axios.post(
    "http://localhost:5500/api/users/login",
    user
  );
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// logout
const logoutService = async () => {
  localStorage.removeItem("userInfo");
  return null;
};

export { loginService, logoutService };
