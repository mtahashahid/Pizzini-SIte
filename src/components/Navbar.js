import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-text">
        <div className="logo">
          <img src="/images/logo.png" alt="logo"></img>
        </div>
        <ul className="navbar-ul" >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
