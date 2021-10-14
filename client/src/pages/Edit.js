import React from "react";
import "../css/component.css";
import Edit from "../components/Edit/Edit";
import Footer from "../components/Dashboard/Footer";
import Header from "../components/Dashboard/Navbar.js";

const Editcomp = () => {
  return (
    <div>
      <Header />
      <Edit />
      <Footer />
    </div>
  );
};

export default Editcomp;
