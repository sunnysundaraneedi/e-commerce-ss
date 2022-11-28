import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "../Store/productsSlice";
import "./Product.css";

const Product = ({ product }) => {
  let title = product.title.split(" ");
  title = title.slice(0, 4).join(" ");

  const dispatch = useDispatch();
  const { id, price, image } = product;

  const clickHandler = () => {
    dispatch(productActions.addToCart({ title, id, price, image }));
  };

  return (
    <div className="content">
      <Link to={`${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3>{title}</h3>
      <h6>&#8377;{product.price}</h6>
      <button className="buy-4" onClick={clickHandler}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
