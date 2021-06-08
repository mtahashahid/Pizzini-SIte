import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at arcu faucibus, ultrices mi id, iaculis dui
              Suspendisse at arcu faucibus, ultrices mi id, iaculis dui
            </p>
            <div className="about-us-timing">
              <p>
                <strong>Monday to Saturday:&nbsp;&nbsp;</strong>9:00 am to 9:00 pm
              </p>
              <p>
                <strong>Sunday:&nbsp;&nbsp;</strong>10:00 am to 6:00 pm
              </p>
            </div>
          </div>
          <div className="col-6">
            <h1>Contact Us</h1>
            <p>
              <strong>Phone:&nbsp;</strong> 000000000000
            </p>
            <p>
              <strong>Address:&nbsp;</strong> Commercial Lane,Shop # 02,NYK
            </p>
            <p>
              <strong>Website:&nbsp;</strong> www.maestropizoinni.com
            </p>          
          </div>
        </div>
      </div>
        <footer className="footer">
        <hr></hr>
        <p>Copyright &#169; All rights reserved 2020</p>
        </footer>
    </div>
  );
};

export default AboutUs;
