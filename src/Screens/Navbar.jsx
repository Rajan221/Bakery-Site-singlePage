import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./Home/img/logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="navContents">
        <Link className="navItems" to="/story">
          <div>Our Story</div>
        </Link>
        <Link className="navItems" to="/bakery">
          <div>The Bakery</div>
        </Link>
        <Link className="navItems" to="/products">
          <div>Our Products</div>
        </Link>
        <Link className="navItems" to="/where">
          <div>Where To Buy</div>
        </Link>
        <Link className="navItems" to="/online">
          <div>Shop Online</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
