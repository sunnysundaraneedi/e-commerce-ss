import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginActions } from "../Store/loginSlice";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Components/Checkout/Checkout";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const showModal = useSelector((state) => state.login.showModal);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();

  console.log(cart.length);

  const clickHandler = () => {
    if (cart.length === 0) {
      return;
    }
    dispatch(loginActions.showHideModal());
  };

  const cartItems =
    cart.length === 0 ? (
      <div className="top">
        <h3>No Items in the cart</h3>
      </div>
    ) : (
      <div className="top">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    );
  return (
    <div className="cart_container">
      {cartItems}
      <div className="bottom">
        <div>
          <h2>&#8377;{totalPrice.toFixed(2)}</h2>
          <h4>TotalPrice</h4>
        </div>
        <button onClick={clickHandler}>Check Out</button>
      </div>
      {showModal && <Checkout />}
    </div>
  );
};

export default Cart;
