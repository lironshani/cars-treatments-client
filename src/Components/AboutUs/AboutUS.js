import React, {useEffect, useState} from 'react';
import { history } from '../../history';
import {useDispatch, useSelector} from 'react-redux';
import './AboutUs.css'
import Pdf from "../../images/FinalTask.pdf";

function AboutUsComponent(props) 
{
	function onClickTelegram()
	{
		window.location='https://telegram.org/'; 
	}
    
	function onClickTwitter()
	{
		window.location='https://twitter.com/?lang=en';
	}
    
	function onClickFacebook()
	{
		window.location='https://www.facebook.com/';	
	}
    
    return (   
        <div>
            <div id="AboutContainer">
                <div className= "row justify-content-center">
                    <div id="About">
                        <div className="col login-left">
                            <form className="AboutForm" action="#" method="post"                       autocomplete="off">
                                <p id="title">About</p>
                                <p id="subTitle">Our Office Address</p>
                                <p id="myAnswer">Ort Braude</p>
                                <p id="subTitle">E-mail</p>
                                <a id="myAnswer" href="mailto:nimnimaor@gmail.com">nimnimaor@gmail.com</a>
                                <p id="subTitle">Website</p>
                                <a id="myAnswer" href="https://www.w3schools.com/">Visit W3Schools.com!</a> 
                                <div className = "App">
                                    <a href = {Pdf} target = "_blank">Privacy Policy & Terms</a>
                                </div>
                                <div className="row">
                                    <button className="login-btn facebook-login-btn" onClick={(e) => 
                                    {
                                        e.preventDefault();
                                        window.location.href='https://facebook.com/';
                                    }}>Facebook</button>
                                </div>
                                <div className="row">
                                    <button className="login-btn Twitter-login-btn" onClick={(e) => 
                                    {
                                        e.preventDefault();
                                        window.location.href='https://twitter.com/?lang=en';
                                    }}>Twitter</button>
                                </div>
                                <div className="row">
                                    <button className="login-btn Telegram-login-btn" onClick={(e) => 
                                    {
                                        e.preventDefault();
                                        window.location.href='https://telegram.org/';
                                    }}>Telegram</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default AboutUsComponent;