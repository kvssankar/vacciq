import React from "react";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import Button from "../CustomButton";
const Profile = () => {
  return (
      
    <div className="signuppagecontainer container">
        <Navbar />
        <div style={{marginTop:"30px"}} ></div>
        <Button  style={{ margin:"auto",width: "40%", padding: "10px" }}
      className="mt-2 primary-button"
      size="sm" >Create Queue</Button>
      <Button     style={{ float:"right",margin:"auto",width: "40%", padding: "10px" }}
      className="mt-2 primary-button"
      size="sm" >join Queue</Button>
      {/* <div className="row d-flex ml-3 mt-3 ">
        <img src="/imgs/back.png" alt="loading..."></img>
      </div> */}
      <div className="mt-5 row justify-content-center d-flex">
        <img
          className="profilebigimg"
          src="/imgs/profilebig.png"
          alt="loading..."
        ></img>
      </div>
      <div className="mt-5 row justify-content-center d-flex">
        <p className="fontstyle1">Param Sharma</p>
      </div>
      <div className="mb-5  row justify-content-center d-flex">
        <p style={{color:"#AFAFAF"}}className="fontstyle1">Param.sharma@gmail.com</p>
      </div>
      <div className="mt-1 row justify-content-center d-flex"></div>
      <div className="profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left align-items-center">
          <div className=" d-flex flexcolumn">
            <h6 className="fontstyle1 queuetablepart2h6">Sriesh Agrawal</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon2.png"></img>
        </div>
      </div>
      <div className="mt-1 profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left align-items-center">
          <div className=" d-flex flexcolumn">
            <h6 className="fontstyle1 queuetablepart2h6">Sriesh Agrawal</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon2.png"></img>
        </div>
      </div>
      <div className="mt-1 profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left align-items-center">
          <div className=" d-flex flexcolumn">
            <h6 className="fontstyle1 queuetablepart2h6">Sriesh Agrawal</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon2.png"></img>
        </div>
      </div>
      <div className="mt-1 profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left align-items-center">
          <div className=" d-flex flexcolumn">
            <h6 className="fontstyle1 queuetablepart2h6">Sriesh Agrawal</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/smicon2.png"></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
