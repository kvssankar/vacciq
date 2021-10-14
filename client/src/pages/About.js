import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import "../css/aboutus.css";
const Landing = () => {
  return (
    <div>
      <Header />
      <div className="pt-3 mt-1 container_aboutus about-us">
        <h4 style={{ fontSize: "20px" }} className="pb-1 fontstyle1small">
          About Us
        </h4>
        <p
          className="fontstyle1small"
          style={{ fontWeight: "400", fontSize: "16px", textAlign: "justify" }}
        >
          With LineITOut you don’t actually need to line up in a queue to enter
          it. The platform takes care of your place in the queue as soon as you
          enter it. To enter the queue, you just need to scan a QR Code specific
          to the business.
        </p>
      </div>
      <div className="gettoknowmore pt-3 mt-1 container_aboutus ">
        <h4 style={{ fontSize: "20px" }} className="pb-1 fontstyle1small">
          Get to know more about us
        </h4>
      </div>
      <div className="ourteam pt-3 mt-1 container_aboutus ">
        <h4 style={{ fontSize: "20px" }} className="pb-1 fontstyle1small">
          Our Team
        </h4>
        <div className="team">
          <div className="row individual">
            <div className="col-6">
              {" "}
              <div className="mt-5 ">
                <img
                  className=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                  }}
                  src="/imgs/sriesh.png"
                  alt="loading..."
                ></img>
                <p
                  className="mt-1"
                  style={{
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  Sriesh Agrawal
                </p>
                <p
                  className=""
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontWeight: "500",
                    opacity: "60%",
                    fontSize: "15px",
                  }}
                >
                  Front End Developer
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mt-5 ">
                <img
                  className=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                  }}
                  src="/imgs/shankar.png"
                  alt="loading..."
                ></img>
                <p
                  className="mt-1"
                  style={{
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  KVS Sankar
                </p>
                <p
                  className=""
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontWeight: "500",
                    opacity: "60%",
                    fontSize: "15px",
                  }}
                >
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mt-5 ">
                <img
                  className=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                  }}
                  src="/imgs/vinamra.png"
                  alt="loading..."
                ></img>
                <p
                  className="mt-1"
                  style={{
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  Vinamra Kohira
                </p>
                <p
                  className=""
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontWeight: "500",
                    opacity: "60%",
                    fontSize: "15px",
                  }}
                >
                  ML Expert
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="mt-5 ">
                <img
                  className=""
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    margin: "auto",
                  }}
                  src="/imgs/param.png"
                  alt="loading..."
                ></img>
                <p
                  className="mt-1"
                  style={{
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  Parram Sharma
                </p>
                <p
                  className=""
                  style={{
                    margin: "0",
                    textAlign: "center",
                    fontWeight: "500",
                    opacity: "60%",
                    fontSize: "15px",
                  }}
                >
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
