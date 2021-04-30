import React from "react";
import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber";
import QueueTable from "../components/Dashboard/QueueTable";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails";
import { Alert } from "reactstrap";
import Footer from "../components/Dashboard/Footer"

const Dashboard = ({}) => {
  return (
    <div>
      <Navbar />
      <QueueNumber />
      <QueueDetails />
      <QueueTable />
      <Footer />
    </div>
  );
};

export default Dashboard;
