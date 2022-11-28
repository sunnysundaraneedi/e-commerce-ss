import React from "react";
import { useDispatch } from "react-redux";
import "./CartItem.css";
import { productActions } from "../Store/productsSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const decrementHandler = () => {
    dispatch(productActions.removeFromCart(item.id));
  };
  const { title, id, price, image } = item;
  const incrementHandler = () => {
    dispatch(productActions.addToCart({ title, id, price, image }));
  };
  return (
    <div className="item_container">
      <div>
        <img src={item.image} alt="" />
      </div>
      <div className="item_title">
        <span>{item.title}</span>
      </div>
      <div className="action_btn">
        <span className="dec" onClick={decrementHandler}>
          -
        </span>
        <span className="text">{item.quantity}</span>
        <span className="inc" onClick={incrementHandler}>
          +
        </span>
      </div>
      <div className="item_price">
        <span>&#8377;{item.totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
