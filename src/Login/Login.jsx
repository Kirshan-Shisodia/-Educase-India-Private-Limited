import "./login.css";
import React from 'react';
import logo from "../assests/logo.png"
import { useState } from "react";
import LoginForm from "../Components/loginForm/LoginForm";
import SignupForm from "../Components/signupForm/SignupForm";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter, BsFacebook } from "react-icons/bs";

export default function Login() {

  const [login, setLogin] = useState(true);
  return (

    <div className="mainWrapper">
        <header>
           <img src={logo} alt="" className="logo" />
           <p>SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
        </header>
        <div className="formtab">
          <div className="buttontab">
            <button className={`${login === true ? "btn-active" : ""}`} onClick={() => setLogin(true)} >Login</button>
            <button className={`${login === false ? "btn-active" : ""}`} onClick={() => setLogin(false)}>Signup</button>
          </div>
          {
            login && <LoginForm />
          }
          {
            !login && <SignupForm />
          }
        </div> 
        <footer>
            <p>or login with</p>
            <div className="icons">
             <div className="iconscontainer"><a href="/#"><FcGoogle /></a></div>
             <div className="iconscontainer"><a href="/#"><BsFacebook /></a></div>
             <div className="iconscontainer"><a href="/#"><BsTwitter /></a></div>
            </div>
            <p>Don't have an Account? <a href="/#" className="link removedec">Create new now!</a></p>
            <p>By signing up, you agree with our <a href="/#" className="link ">Terms & Conditions</a></p>
        </footer> 
    </div>
  )
}

