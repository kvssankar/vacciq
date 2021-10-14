import React, { useEffect, useState } from "react";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable";
import Navbar from "../components/Dashboard/Navbar";
import QueueDetails from "../components/Dashboard/QueueDetails";
import Footer from "../components/Dashboard/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import { io as socketIOClient } from "socket.io-client";
import { useHistory } from "react-router";
import { notifyMe } from "../Util.js";

const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

const Dashboard = () => {
  let user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    setLoading(0);
    if (queue == null) return history.push("/userdashboard");
    socket.emit("joinQ", {
      qid: queue._id,
    });
    socket.on("qdata", (data) => {
      dispatch({ type: "GET_QUEUE", payload: data });
      notifyMe(user, queue);
    });
    socket.on("removedPerson", (data) => {
      notifyMe(user, queue);
      if (data._id === user._id) {
        dispatch({ type: "UPDATE_USER", payload: data });
        history.push("/userdashboard");
      }
    });
  };
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!user.queue_id) history.push("/userdashboard");
    if (loading === 1) dispatch(getq(user.queue_id, floading));
    return () => socket.disconnect();
  }, []);
  return (
    <>
      {loading === 1 && <Loading />}
      {loading === 0 && (
        <>
          <Navbar socket={socket} />
          <div className="container">
            <QueueDetails user={user} queue={queue} />
            {/* <h5
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
              className="fontstyle1 ml-2"
            >
              Good Morning, <br></br>
              {user.name}
            </h5> */}
            <QueueNumber user={user} queue={queue} />
            <QueueTable user={user} queue={queue} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Dashboard;
