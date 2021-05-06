import React, { useEffect, useState } from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Admin/QueueTable.jsx";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer.jsx";
import Admin from "../components/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000/";

const AdminPage = () => {
  let user = useSelector((state) => state.userReducer.user);
  let center = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    setLoading(0);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    // setInterval(async () => {
    //   await socket.emit("getq", {
    //     id: queue._id,
    //   });
    // }, [60000]);
    // socket.on("qdata", (data) => {
    //   console.log(data);
    //   dispatch({ type: "GET_QUEUE", payload: data });
    // });
    dispatch(getq(user.center_id, floading));
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
