import React from "react";
import "./ProductDetail.css";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productID } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === Number(productID));
  return (
    <div className="detail_container">
      <div className="left">
        <img src={product.image} alt="" />
      </div>
      <div className="right">
        <h1>{product.title}</h1>
        <h3>Price : </h3>
        <p className="price">&#8377;{product.price}</p>
        <h3>Description : </h3>
        <p>{product.description}</p>
      </div>
      <Link to="/products" className="back_btn">
        Back
      </Link>
    </div>
  );
};

export default ProductDetail;
