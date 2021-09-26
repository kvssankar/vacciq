import React, { useEffect, useState } from "react";
import QueueTable from "../components/Admin/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer.jsx";
import Admin from "../components/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router";
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

const AdminPage = () => {
  let user = useSelector((state) => state.userReducer.user);
  let center = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    setLoading(0);
    if (center == null) return history.push("/userdashboard");
    socket.emit("joinQ", {
      qid: user.center_id,
      uid: null,
    });
    socket.on("qdata", (data) => {
      console.log(data);
      dispatch({ type: "GET_QUEUE", payload: data });
    });
  };
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (loading === 1) dispatch(getq(user.center_id, floading));

    return () => socket.disconnect();
  }, []);
  return (
    <>
      {loading === 1 && <Loading />}
      {loading === 0 && (
        <>
          <Navbar />
          <div className="container">
            <Admin user={user} center={center} />
            <QueueTable user={user} center={center} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdminPage;
