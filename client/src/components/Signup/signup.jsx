import React, { useState } from "react";
import "./signup.css";
import Button from "../CustomButton";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [sex,setSex]=useState(1);
  const history=useHistory();
    return (
      <div className="signuppagecontainer container">
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" alt="loading..." onClick={()=>history.push("/")}></img>
        </div>
        <div className="row d-flex ml-4 mt-3 ">
          <h5>Sign Up and <br></br> Get Started !</h5>
        </div>
        <div className="mt-3 ml-4 mr-4 signupform">
          <input type="text" className="form-input" placeholder="Name" />
          <input type="text" className="form-input" placeholder="Phone Number" />
          <input type="text" className="form-input" placeholder="Email Address" />
          <input type="text" className="form-input" placeholder="Password" />
          <input type='radio' className="radio" id='male' checked={sex} onClick={()=>{setSex(!sex)}} name='radio'/>
          <label className="radio-label" for='male'>Male</label>
          <input type='radio' className="radio" id='female' name='radio'/>
          <label className="radio-label" checked={!sex} onClick={()=>{setSex(!sex)}} for='female'>Female</label>
          {/* <input type="checkbox" className="ml-auto form-input" placeholder="Password" /> */}
        </div>
        <div className="mt-5 row justify-content-center d-flex">
            <p>Already have an account?  <a style={{color:"#42c3fc",textDecoration:"none"}}href="/login">Sign In</a>    </p>
        </div>
        <Button
      style={{ margin:"auto",width: "100%", padding: "10px" }}
      className="mt-2 primary-button"
      size="md"
    >
      Register
    </Button>
      </div>
    );
  };
  
export default Signup;