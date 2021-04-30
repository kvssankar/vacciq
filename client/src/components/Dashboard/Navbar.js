import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownItem, NavbarText, DropdownMenu,
} from "reactstrap";
import "./Navbar.css";
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><img className="logonav" src="/imgs/logo.png"></img></NavbarBrand>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavLink href="https://www.google.com"><img className="barcodeimg" src="/imgs/barcode.png" alt="barcodeScanner"></img></NavLink>
      </Navbar>
    </div>
  );
};

export default Example;
