import React, { useEffect } from "react";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Dashboard = () => {
  const user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);

  const history = useHistory();
  useEffect(() => {
    if (queue === null) history.push("/userdashboard");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <QueueDetails user={user} queue={queue} />
        <QueueNumber user={user} queue={queue} />
        <QueueTable user={user} queue={queue} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
