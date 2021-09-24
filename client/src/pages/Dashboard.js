import React, { useEffect, useState } from "react";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails.jsx";
import Footer from "../components/Dashboard/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router";
//const ENDPOINT = "https://lineitout.herokuapp.com/";
const ENDPOINT = "http://localhost:5000/";

const Dashboard = () => {
  const user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    setLoading(0);
    if (queue == null) return history.push("/userdashboard");
    socket.emit("joinQ", {
      qid: queue._id,
      uid: user._id,
    });
    socket.on("qdata", (data) => {
      console.log(data);
      dispatch({ type: "GET_QUEUE", payload: data });
    });
  };
  const dispatch = useDispatch();
  const history = useHistory();
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
            <h5
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              className="fontstyle1 ml-2"
            >
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
