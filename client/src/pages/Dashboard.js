import React from "react";
import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber";
import QueueTable from "../components/Dashboard/QueueTable";
import Navbar from "../components/Dashboard/Navbar";
import { Alert } from "reactstrap";

const Dashboard = ({}) => {
  return (
    <div>
      <Navbar />
      <QueueNumber />
      <QueueTable />
    </div>
  );
};

export default Dashboard;
