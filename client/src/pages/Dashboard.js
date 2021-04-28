import React from "react";
import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber";
import QueueTable from "../components/Dashboard/QueueTable";
import Example from "../components/Dashboard/Navbar";
import { Alert } from "reactstrap";

const Dashboard = ({}) => {
  return (
    <div>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <QueueNumber />
      <Example />
      <QueueTable />
    </div>
  );
};

export default Dashboard;
