import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
// import home from "../../img/home.svg";
import "../css/pricing.css";
const Pricing = () => {
  return (
    <div>
      <Header />
      <div className="business_main">
        <div className="pt-3 mt-1 container_aboutus about-us">
          <h4 style={{ fontSize: "20px" }} className="pb-1 fontstyle1small">
            Pricing
          </h4>
          <p
            className="fontstyle1small"
            style={{
              fontWeight: "400",
              fontSize: "16px",
              textAlign: "justify",
            }}
          >
            There are 3 plan types Free, Standard, and Organizational.{" "}
            {/* <img src={home} width="25px" alt="Profile"></img> */}
          </p>
        </div>
        <div className="b_plan">
          <h6 className="fontstyle1small" style={{ textAlign: "center" }}>
            Free
          </h6>
          <hr
            style={{ width: "80%", backgroundColor: "rgba(66, 195, 252, 1)" }}
          ></hr>
          <div className="b_list">
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              {" "}
              Manage a single Queue
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              All queueing features available
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/cross.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Estimated waiting time not available.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/cross.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Form up to 10 queues at a time.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/cross.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Unlimited Queue Size
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
          </div>
          <div style={{ textAlign: "center" }} className="business_button_cont">
            <button className="business_button">Try For Free</button>
          </div>
        </div>

        {/* STANDARD PLAN */}
        <div style={{ marginTop: "50px" }} className="b_plan">
          <h6 className="fontstyle1small" style={{ textAlign: "center" }}>
            Standard
          </h6>
          <hr
            style={{ width: "80%", backgroundColor: "rgba(66, 195, 252, 1)" }}
          ></hr>
          <div className="b_list">
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              {" "}
              Manage a single Queue
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              All queueing features available
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Estimated waiting time not available.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Form up to 10 queues at a time.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Unlimited Queue Size
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
          </div>
          <div style={{ textAlign: "center" }} className="business_button_cont">
            <button className="business_button">Try For Free</button>
          </div>
        </div>

        {/* ORGANIZATION PLAN */}
        <div style={{ marginTop: "50px" }} className="b_plan">
          <h6 className="fontstyle1small" style={{ textAlign: "center" }}>
            Organization
          </h6>
          <hr
            style={{ width: "80%", backgroundColor: "rgba(66, 195, 252, 1)" }}
          ></hr>
          <div className="b_list">
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              {" "}
              Get a SaaS model on your company domain
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              All queueing features available
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Estimated waiting time not available.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Form up to 10 queues at a time.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Unlimited Queue Size
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
            <img
              className=""
              style={{
                marginRight: "10px",
              }}
              src="/imgs/tick.svg"
              alt="loading..."
            ></img>
            <p
              className="fontstyle1small"
              style={{ display: "inline", fontWeight: "400" }}
            >
              Waiting time tuned to the organisation&quot;s need.
            </p>
            <div style={{ display: "block", marginBottom: "10px" }}></div>
          </div>
          <div style={{ textAlign: "center" }} className="business_button_cont">
            <button className="business_button">Try For Free</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
