import React, { Component } from "react";
import UpdatePasswordComponent from "../components/ResetPassword/ResetPassComp";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <UpdatePasswordComponent token={this.token} />
      </div>
    );
  }
}
export default ResetPassword;
