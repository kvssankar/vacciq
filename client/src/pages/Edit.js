import React from "react";
import "../css/component.css";
import Edit from "../components/Edit/Edit.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
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
