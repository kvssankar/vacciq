import React, { Suspense } from "react";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Profile = () => {
  const history = useHistory();
  let user = useSelector((state) => state.userReducer.user);
  return (
    <div className="signuppagecontainer container">
      <Navbar />
      <div className="mt-5 profilepic">
        <img
          className=""
          style={{
            display: "block",
            margin: "auto",
          }}
          src="/imgs/profile.svg"
          alt="loading..."
        ></img>
        <h5
          className="mt-2"
          style={{
            textAlign: "center",
          }}
        >
          Parram Sharma
        </h5>
        <h6
          className="mt-2 mb-3"
          style={{
            textAlign: "center",
            fontWeight: "500",
            opacity: "60%",
          }}
        >
          srieshvit@gmail.com
        </h6>
      </div>
      <div className="profilecards">
        <div className="profilecard">
          <div className=" profile d-flex justify-content-between align-items-center">
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon.png"}
                alt="Kick Out"
              ></img>
            </div>
            <h6
              style={{
                backgorund: "red",
                position: "absolute",
                left: "25%",
                margin: "0",
              }}
            >
              About You
            </h6>
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon2.png"}
                alt="Kick Out"
              ></img>
            </div>
          </div>
        </div>
        <div className="profilecard">
          <div className=" profile d-flex justify-content-between align-items-center">
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon.png"}
                alt="Kick Out"
              ></img>
            </div>
            <h6
              style={{
                backgorund: "red",
                position: "absolute",
                left: "25%",
                margin: "0",
              }}
            >
              About You
            </h6>
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon2.png"}
                alt="Kick Out"
              ></img>
            </div>
          </div>
        </div>
        <div className="profilecard">
          <div className=" profile d-flex justify-content-between align-items-center">
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon.png"}
                alt="Kick Out"
              ></img>
            </div>
            <h6
              style={{
                backgorund: "red",
                position: "absolute",
                left: "25%",
                margin: "0",
              }}
            >
              About You
            </h6>
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon2.png"}
                alt="Kick Out"
              ></img>
            </div>
          </div>
        </div>
        <div className="profilecard">
          <div className=" profile d-flex justify-content-between align-items-center">
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon.png"}
                alt="Kick Out"
              ></img>
            </div>
            <h6
              style={{
                backgorund: "red",
                position: "absolute",
                left: "25%",
                margin: "0",
              }}
            >
              About You
            </h6>
            <div className="queuetablepart3 p-2 col-example">
              <img
                style={{ marginBottom: "3px", padding: "0" }}
                src={"/imgs/smicon2.png"}
                alt="Kick Out"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
