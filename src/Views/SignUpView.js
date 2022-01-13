import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import SignUp from "../Components/SignUpComponent";

class SignUpView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignUp />
      </div>
    );
  }
}
export default SignUpView;
