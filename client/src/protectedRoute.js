import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const protectedRoute = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  return userInfo?.token ? <Outlet /> : <Navigate to="/login" />;
};

export { protectedRoute };
