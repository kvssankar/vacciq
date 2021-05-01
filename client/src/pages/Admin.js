import React from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
import Admin from "../components/Admin/Admin";

const AdminPage = () => {
  return (
    <div>
      <Admin />
      <QueueTable />
    </div>
  );
};

export default AdminPage;
