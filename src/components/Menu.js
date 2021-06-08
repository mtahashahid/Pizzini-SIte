import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="menu-img">
              <img src="/images/menupizza.jpg" alt="menu"></img>
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at arcu faucibus, ultrices mi id, iaculis dui. Proin
              accu commodo. Nulla sit amet erat.
            </p>
            <div className="menu-btn">
              <a href="" className="btn btn-smart">
                  View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
