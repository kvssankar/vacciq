import React from "react";
import CustomButton from "../components/CustomButton";
import logo from "../img/vacciq_logo_1 1.png";
import couple from "../img/couple.svg";
import "../css/landing.css";

const Landing = () => {
  return (
    <div className="container column-flex">
      <img src={logo} alt="VacciQ" />
      <img
        src={couple}
        height="300px"
        style={{ marginBottom: 35 }}
        alt="Loading..."
      />
      <CustomButton
        style={{ width: "100%", padding: "10px" }}
        className="primary-button"
        size="md"
        href="/register"
      >
        Register
      </CustomButton>
      <CustomButton
        style={{ width: "100%", padding: "10px" }}
        className="primary-outline"
        href="/login"
        size="md"
      >
        Login
      </CustomButton>
    </div>
  );
};

export default Landing;
