import React, { useState } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { register } from "../../actions/userActions";

const Signup = () => {
  const [sex,setSex]=useState(1);
  const history=useHistory();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  
  const done = ()  => {
    dispatch(register(name,email,phone,password,sex,history));
  };
    return (
      <div className="signuppagecontainer container">
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" alt="loading..." onClick={()=>history.push("/")}></img>
        </div>
        <div className="row d-flex ml-4 mt-3 ">
          <h5>Sign Up and <br></br> Get Started !</h5>
        </div>
        <div className="mt-3 ml-4 mr-4 signupform">
          <input type="text" className="form-input" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" className="form-input" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <input type="email" className="form-input" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" className="form-input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <input type='radio' className="radio" id='male' checked={sex} onClick={()=>{setSex(!sex)}} name='radio'/>
          <label className="radio-label" for='male'>Male</label>
          <input type='radio' className="radio" id='female' name='radio'/>
          <label className="radio-label" checked={!sex} onClick={()=>{setSex(!sex)}} for='female'>Female</label>
          {/* <input type="checkbox" className="ml-auto form-input" placeholder="Password" /> */}
        </div>
        <div className="mt-5 row justify-content-center d-flex">
            <p>Already have an account?  <a style={{color:"#42c3fc",textDecoration:"none"}}href="/login">Sign In</a>    </p>
        </div>
        <button
        style={{ margin:"auto",width: "100%", padding: "10px" }}
        className="mt-2 primary-button"
        onClick={done}
        size="md"
        >
          Register
        </button>
      </div>
    );
  };
  
export default Signup;