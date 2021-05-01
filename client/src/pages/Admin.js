import React from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Admin/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer.jsx";
import Admin from "../components/Admin/Admin";
import { useSelector } from "react-redux";

const AdminPage = () => {
  let user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <Admin user={user} />
      <QueueTable user={user} />
    </div>
  );
};

export default AdminPage;
