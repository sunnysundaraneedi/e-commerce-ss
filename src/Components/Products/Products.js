import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../Product/Product";
import { productActions } from "../../Store/productsSlice";
import FilterGroup from "../FilterGroup/FilterGroup";
import "./Products.css";

const Products = () => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const currentUser = useSelector((state) => state.login.currentUser);
  console.log(currentUser);

  const [showUserName, setShowUserName] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      dispatch(productActions.setProducts(data));
      dispatch(productActions.setFilteredProducts());
    };
    getProducts();
  }, [dispatch]);

  setInterval(() => {
    setShowUserName(false);
  }, 4000);
  return (
    <Fragment>
      <div className="filter_group">
        <FilterGroup />
      </div>
      {showUserName && (
        <div className="show-user shu">Welcome {currentUser.fullname}</div>
      )}
      <div className="products_container">
        {!filteredProducts ? (
          <div>Loading</div>
        ) : (
          filteredProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Products;
