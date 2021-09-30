import React, { useEffect, useState } from "react";
import QueueTable from "../components/Admin/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer.jsx";
import Admin from "../components/Admin/Admin";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const AdminPage = () => {
  let user = useSelector((state) => state.userReducer.user);
  let center = useSelector((state) => state.userReducer.queue);

  const history = useHistory();

  useEffect(() => {
    if (center === null) history.push("/userdashboard");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Admin user={user} center={center} />
        <QueueTable user={user} center={center} />
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
