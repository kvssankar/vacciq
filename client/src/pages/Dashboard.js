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
      <div className="container" >
        <h5 className="fontstyle1 mt-5 ml-2">
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
