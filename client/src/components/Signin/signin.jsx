import React, { useState } from "react";
import "./signin.css";
import Button from "../CustomButton";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history=useHistory();
    return (
      <div className="signuppagecontainer container" style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}}>
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" alt="loading..." onClick={()=>history.push("/")}></img>
        </div>
        <div className="row d-flex ml-4 mt-3 ">
          <h5>Welcome back  !</h5>
        </div>
        <div className="mt-3 ml-4 mr-4 signupform">
          <input type="text" className="form-input" placeholder="Email Address" />
          <input type="text" className="form-input" placeholder="Password" />
        </div>
        <div className="mt-5 row justify-content-center d-flex">
            <p>Dont have an account?  <a style={{color:"#42c3fc",textDecoration:"none"}}href="/register">Sign Up</a>    </p>
        </div>
        <Button
      style={{ margin:"auto",width: "100%", padding: "10px" }}
      className="mt-2 primary-button"
      size="md"
    >
      Login
    </Button>
      </div>
    );
  };
  
export default Signup;