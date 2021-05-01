import React, { useState } from "react";
import "./signin.css";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { login } from "../../actions/userActions";
 
const Signup = () => {
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const history=useHistory();
  const dispatch=useDispatch();
  const done=async()=>{
    //console.log("sssa")
    await dispatch(login(phone,password));
    history.push('/app');
  }
    return (
      <div className="signuppagecontainer container" style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100vh"}}>
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" alt="loading..." onClick={()=>history.push("/")}></img>
        </div>
        <div className="row d-flex ml-4 mt-3 ">
          <h5>Welcome back  !</h5>
        </div>
        <div className="mt-3 ml-4 mr-4 signupform">
        <input type="text" className="form-input" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <input type="password" className="form-input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="mt-5 row justify-content-center d-flex">
            <p>Dont have an account?  <a style={{color:"#42c3fc",textDecoration:"none"}}href="/register">Sign Up</a>    </p>
        </div>
        <button
        style={{ margin:"auto",width: "100%", padding: "10px" }}
        onClick={done}
        className="mt-2 primary-button"
        size="md"
        >
          Login
        </button>
      </div>
    );
  };
  
export default Signup;