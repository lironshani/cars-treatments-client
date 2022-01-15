import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import UpdatePasswordComponent from "../components/ResetPassword/ResetPassComp";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UpdatePasswordComponent token={this.token} />
      </div>
    );
  }
}
export default ResetPassword;
