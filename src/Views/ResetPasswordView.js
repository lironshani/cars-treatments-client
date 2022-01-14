import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import UpdatePasswordComponent from "../components/ResetPassword/ResetPassComp";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UpdatePasswordComponent
          userid={this.props.match.params.userid}
          token={this.props.match.params.token}
        />
      </div>
    );
  }
}
export default ResetPassword;
