import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ForgotPasswordComponent from "../components/ForgotPassword/ForgotPassComp";

class ForgotPasswordView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ForgotPasswordComponent />
      </div>
    );
  }
}
export default ForgotPasswordView;
