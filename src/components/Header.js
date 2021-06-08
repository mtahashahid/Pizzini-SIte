import React from "react";
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className="banner">
        <Navbar/>
      <div className="banner-content">
        <div className="container">
          <div className="banner-text">
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <div className="banner-btn">
                <a href="" className="btn btn-smart" >Delivery Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
