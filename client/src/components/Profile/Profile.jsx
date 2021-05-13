import React from "react";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import probilebig from "../../img/man.svg"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
const Profile = () => {
  let user=useSelector(state=>state.userReducer.user);
  const history=useHistory()
  return (
      
    <div className="signuppagecontainer container">
        <Navbar />
        <div style={{marginTop:"30px"}} ></div>
       
      <div className="mt-5 row justify-content-center d-flex">
        <img
          className="profilebigimg"
          src="/imgs/profilebig.png"
          alt="loading..."
        ></img>
      </div>
      <div className="mt-5 row justify-content-center d-flex">
        <p className="fontstyle1">{user.name}</p>
      </div>
      <div className="mb-5  row justify-content-center d-flex">
        <p style={{color:"#AFAFAF"}}className="fontstyle1">{user.phone}</p>
      </div>
      <button  style={{ margin:"auto",width: "40%", padding: "10px" }}
      className=" primary-button"
      size="sm" onClick={()=>history.push("/create")}  >Create  Queue</button>
      <button  onClick={()=>history.push("/admin")}   style={{ float:"right",margin:"auto",width: "40%", padding: "10px" }}
      className="primary-button"
      size="sm" >View Queue</button>
      <div className="mt-1 row justify-content-center d-flex"></div>
     
      <Footer />
    </div>
  );
};

export default Profile;
