import React, { useEffect, useState } from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000/";

const Dashboard = () => {
  const user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    setLoading(0);
    // socket.emit("getq", {
    //   qid: queue._id,
    //   uid: user._id,
    // });
    socket.on("qdata", (data) => {
      console.log(data);
      dispatch({ type: "GET_QUEUE", payload: data });
    });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === 1) dispatch(getq(user.queue_id, floading));
    return () => socket.disconnect();
  }, []);
  //TODO:If no queue_id then redirect
  return (
    <>
      {loading === 1 && <Loading />}
      {loading === 0 && (
        <>
          <Navbar />
          <div className="container">
            <QueueDetails user={user} queue={queue} />
            <h5 className="fontstyle1 mt-5 ml-2">
              Good Morning, <br></br>
              {user.name}
            </h5>
            <QueueNumber />
            <QueueTable user={user} queue={queue} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Dashboard;
