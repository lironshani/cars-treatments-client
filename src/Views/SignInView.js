import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn/SignInComponent";

class SignInView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SignIn />
      </div>
    );
  }
}
export default SignInView;
