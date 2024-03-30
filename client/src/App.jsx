import { BrowserRouter, Routes, Route } from "react-router-dom";
import path from "./utils/path";
import Layout from "./layouts/Layout";
import Home from "./pages/public/Home";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import { protectedRoute } from "./protectedRoute";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
