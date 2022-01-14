import React from "react";
import { Link } from "react-router-dom";

import "./Welcome.css";

function Welcome() {
  return (
    <div >
      Welcome
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/about-us">About Us</Link>
    </div>
  );
}

export default Welcome;
