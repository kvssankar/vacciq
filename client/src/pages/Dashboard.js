import React from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails.jsx";
import Footer from "../components/Dashboard/Footer.jsx";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ background: "#f8f9fa" }}>
        <h5 className="fontstyle1 ml-1">
          Good Morning, <br></br>Sriesh
        </h5>
        <QueueNumber />
        <QueueDetails />
        <QueueTable />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
