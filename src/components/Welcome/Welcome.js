import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <meta name="viewport" content="width=device-width,initial-scale=0.72" />
      <div className="row no-gutters text-center shadow">
        <div className=" col-sm-6 p-2 form-horizontal ho">
              <img
                className="logo-div"
                src={require("../../images/small-logo.jpg")}
              />
            <div className="container-div">
                <h1 className="mb-3 text-theme ">Welcome to Car Spa</h1>

              <h6 className="h6">
                We invite you to book your car a day at the spa!<br></br>Our
                technicians are the most professional in the field, and they will
                be happy to serve you.<br></br>Do not delay, BOOK TODAY!
              </h6>
                <br />
                <Link to="/sign-up" className="btn-theme btn-lg btn-block">
                  Sign Up
                </Link>
                <br />
                <label>Already have a user?</label>
                <br />
                <Link to="/sign-in" className="btn-theme btn-lg btn-block">
                  Sign In
                </Link>
                </div>
        </div>

        <div className=" col-sm-6">
          <div className="account-block rounded-right">
            <div className="">
              <img
                id="logoImg"
                className="img-responsive center-block"
                src={require("../../images/logo2.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
