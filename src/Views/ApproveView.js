import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ApproveMyProfileComponent from "../Components/ApproveMyProfileComponent";

class ApproveView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ApproveMyProfileComponent
          userid={this.props.match.params.userid}
          // token={this.props.match.params.token}
        />
      </div>
    );
  }
}
export default ApproveView;
