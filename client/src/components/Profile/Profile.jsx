import React from "react";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
const Profile = () => {
  return (
    <div className="signuppagecontainer container">
      <Navbar />

      {/* STAY HOME STAY SAFE */}
      <div
        style={{ marginTop: "5rem" }}
        className="  row d-flex  justify-content-between queuenumbercontainer"
      >
        <div className="p-2 col-example">
          <div className="texts ">
            <h6 className="ml-4 fontstyle1small pb-5 mt-3">
              Stay Home,<br></br>Stay Safe
            </h6>
          </div>
        </div>
        <img
          className=" queuenumberman"
          style={{ zIndex: 2 }}
          src="/imgs/lady1.svg"
          alt="loading..."
        ></img>
      </div>

      {/* COVID19 LATEST UPDATES */}
      <div>
        <h6 className="ml-1 fontstyle1small pb-2  mt-5">
          Covid-19 latest Updates near you
        </h6>
        <div className="row no-gutters justify-content-center statscont">
          <div className="col-6 d-flex">
            <div
              style={{
                backgroundColor: "rgba(74, 214, 204, 0.15)",
                color: "rgba(74, 214, 204, 0.75)",
                fontWeight: "900",
                fontSize: "95%",
              }}
              className="row fontstyle1small statsboxin-right"
            >
              <p className="ml-2 mt-1 ">Recovered</p>
              <div className=" " style={{ margin: "50px 20px 0 auto " }}>
                95000
              </div>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div
              style={{
                backgroundColor: "rgba(242, 251, 255, 1)",
                color: "rgba(66, 195, 252, 1)",
                fontWeight: "900",
                fontSize: "95%",
              }}
              className="row fontstyle1small statsboxin-right"
            >
              <p className="ml-2 mt-1 ">Active</p>
              <div className=" " style={{ margin: "50px 20px 0 auto " }}>
                95000
              </div>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div
              style={{
                backgroundColor: "rgba(218, 70, 71, 0.13)",
                color: "rgba(218, 70, 71, 1)",
                fontWeight: "900",
                fontSize: "95%",
              }}
              className="row fontstyle1small statsboxin-right"
            >
              <p className="ml-2 mt-1 ">Confirmed</p>
              <div className=" " style={{ margin: "50px 20px 0 auto " }}>
                95000
              </div>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.24)",
                color: "rgba(196, 196, 196, 1)",
                fontWeight: "900",
                fontSize: "95%",
              }}
              className="row fontstyle1small statsboxin-right"
            >
              <p className="ml-2 mt-1 ">Deceased</p>
              <div className=" " style={{ margin: "50px 20px 0 auto " }}>
                95000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginBottom: "100px", width: "95%", margin: "0 auto" }}
        className="queuenumbercontainer"
      ></div>

      <Footer />
    </div>
  );
};

export default Profile;
