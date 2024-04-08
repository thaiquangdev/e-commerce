import { BrowserRouter, Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Layout from "./layouts/Layout";
import Home from "./pages/public/Home";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import Dashboard from "./pages/public/Dashboard";
import Profile from "./pages/public/Profile";
import Order from "./pages/public/Order";
import DashboardLayout from "./layouts/DashboardLayout";
import Products from "./pages/public/Products";
import ProductDetail from "./pages/public/ProductDetail";

// protedroute order, dashboard, profile, password

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={path.public} element={<Layout />}>
            <Route path={path.register} element={<Register />} />
            <Route path={path.login} element={<Login />} />
            <Route path={path.home} element={<Home />} />
            <Route path={path.products} element={<Products />} />
            <Route
              path={path.detail_product_category_pid}
              element={<ProductDetail />}
            />
            <Route path={path.dashboardLayout} element={<DashboardLayout />}>
              <Route path={path.dashboard} element={<Dashboard />} />
              <Route path={path.profile} element={<Profile />} />
              <Route path={path.order} element={<Order />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
