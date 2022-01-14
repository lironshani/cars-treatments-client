import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SignUp from "../components/SignUp/SignUp";

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
