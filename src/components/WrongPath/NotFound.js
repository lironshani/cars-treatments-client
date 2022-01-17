import React from "react";
import "./style.css";

const NotFound = () => (
    <div className="container">
        <div className="div-dois">
        <h1 className="title">404</h1>
        <h2 className="page-not-found" >Page not found</h2>
        <p className="sorry-txt">Sorry... we can't find the page you're looking for </p>
        <button className="btn">Go back home</button>
        </div>
    </div>
);

export default NotFound;