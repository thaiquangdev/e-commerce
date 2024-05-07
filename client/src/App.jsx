import { BrowserRouter, Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Layout from "./layouts/Layout";
import Home from "./pages/public/homes/Home";
import Register from "./pages/public/registers/Register";
import Login from "./pages/public/logins/Login";
import Dashboard from "./pages/public/Dashboard";
import Profile from "./pages/public/Profile";
import Order from "./pages/public/Order";
import DashboardLayout from "./layouts/DashboardLayout";
import Products from "./pages/public/products/Products";
import ProductDetail from "./pages/public/products/ProductDetail";
import Cart from "./pages/public/carts/Cart";
import { ProtectedRoute } from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./pages/public/wishlists/Wishlist";
import PageNotFound from "./pages/public/pageNotFounds/PageNotFound";
import CheckOut from "./pages/public/checkOuts/CheckOut";

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
            <Route element={<ProtectedRoute />}>
              <Route path={path.dashboardLayout} element={<DashboardLayout />}>
                <Route path={path.dashboard} element={<Dashboard />} />
                <Route path={path.profile} element={<Profile />} />
                <Route path={path.order} element={<Order />} />
              </Route>
              <Route path={path.cart} element={<Cart />} />
              <Route path={path.wishlist} element={<Wishlist />} />
              <Route path={path.checkout} element={<CheckOut />} />
            </Route>
            <Route path={path.not_found} element={<PageNotFound />} />
            {/* <Redirect to={path.not_found} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
