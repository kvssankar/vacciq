import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Home.css";
const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "rgba(235, 243, 250, 1)",
          position: "relative",
        }}
      >
        <div
          style={{
            top: "10px",
            position: "absolute",
          }}
        >
          <img className="logonav" src="/imgs/back.png" alt="loading..."></img>
        </div>
        <NavbarBrand
          style={{ margin: "0 auto" }}
          className="pt-4 pb-2 "
          href="/userdashboard"
        >
          <img className="logonav" src="/imgs/logo.png" alt="loading..."></img>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
