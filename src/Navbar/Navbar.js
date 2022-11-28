import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.products.totalQuantity);
  const [navBg, setNavBg] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <nav className={navBg ? `nav nav-bg` : `nav`}>
      <div className="nav_container">
        <h2>
          <Link to="/products" className="link">
            DMInfy2.0
          </Link>
        </h2>
        <ul>
          <Link to="/products" className="link">
            <li>Home</li>
          </Link>
          <Link to="/cart" className="link">
            <li className="li">
              <i className="uil uil-shopping-cart"></i>
              <span className="badge">{quantity}</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
