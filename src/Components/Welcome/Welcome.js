import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
<div class="container" style={{marginTop:"8%"}}>
                    
                        <div class="row no-gutters text-center shadow">
                            <div class="col-lg-6 col-md-4 ">
                                <div class="p-5" style={{marginTop:"15%"}}>

                                  <img class="logo-div" src={require('../../images/small-logo.jpg')}/>

                                    <div class="mb-2">
                                        <h1 class="h1 font-weight-bold text-theme"><u>Welcome to Car Spa</u></h1>
                                    </div>
                                  <h6 class="h6">We invite you to book your car a day at the spa!<br></br>Our technicians are the most professional in the field, and they will be happy to serve you.<br></br>Do not delay, BOOK TODAY!</h6>

                                        <div class="form-horizontal">
                                          <br/><Link to="/sign-up" className="btn-theme btn-lg btn-block">Sign Up</Link><br/>
                                          <label>Already have a user?</label><br/>
                                          <Link to="/sign-in" className="btn-theme btn-lg btn-block">Sign In</Link>
                                        </div>

                                </div>
                            </div>

                            <div class="col-lg-6 col-md-4 col-sm-2 d-lg-inline-block">
                                <div class="account-block rounded-right">
                                    <div class="container-div">
                                        <img id="logoImg" class="img-responsive center-block" src={require('../../images/logo2.png')} style={{height:"100%", width:"100%"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  );
}

export default Welcome;
