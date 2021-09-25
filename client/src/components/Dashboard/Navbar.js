import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";
import "./Navbar.css";
const Example = (props) => {
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/userdashboard">
          <img className="logonav" src="/imgs/logo.png" alt="loading..."></img>
        </NavbarBrand>
        <Nav className="mr-auto" navbar></Nav>
        <NavLink href="/scan">
          <img
            className="barcodeimg"
            src="/imgs/barcode.png"
            alt="barcodeScanner"
          ></img>
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Example;
