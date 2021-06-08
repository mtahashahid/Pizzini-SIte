import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at arcu faucibus, ultrices mi id, iaculis dui. Proin
              accu commodo. Nulla sit amet erat.
            </p>
            <div className="about-btn">
              <a href="" className="btn btn-smart">
                Read More
              </a>
            </div>
          </div>
          <div className="col-6">
              <div className="about-img">
                  <img src="/images/pizza.jpg" alt="about"></img>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
