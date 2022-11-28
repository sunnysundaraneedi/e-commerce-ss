import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Login from "./Components/Login/Login";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Products from "./Components/Products/Products";
import Register from "./Components/Register/Register";
import Navbar from "./Navbar/Navbar";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { fetchUsers } from "./Store/fetchUsers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products">
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path=":productID"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
};

export default App;
