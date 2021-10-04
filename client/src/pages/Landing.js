import React, { useEffect } from "react";
import CustomButton from "../components/CustomButton";
import logo from "../img/vacciq_logo_1 1.png";
import couple from "../img/ASFASF 1.svg";
import "../css/landing.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Landing = () => {
  const history = useHistory();
  let user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (user) history.push("/userdashboard");
  }, []);
  return (
    <div
      className="container column-flex"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src={logo} style={{ marginBottom: 35 }} width="200px" alt="DigiQ" />
      <img
        src={couple}
        height="300px"
        style={{ marginBottom: 35 }}
        alt="Loading..."
      />
      <CustomButton
        style={{ width: "85%", padding: "10px" }}
        className="primary-button"
        size="md"
        href="/register"
      >
        Register
      </CustomButton>
      <CustomButton
        style={{ width: "85%", padding: "10px" }}
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
