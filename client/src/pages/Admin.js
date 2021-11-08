import React, { useEffect, useState } from "react";
import QueueTable from "../components/Admin/QueueTable";
import Navbar from "../components/Dashboard/Navbar";
import Footer from "../components/Dashboard/Footer";
import Admin from "../components/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import { io as socketIOClient } from "socket.io-client";
import { useHistory } from "react-router";
import { Spinner } from "reactstrap";
// eslint-disable-next-line no-undef
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
    });
    socket.on("qdata", (data) => {
      dispatch({ type: "GET_QUEUE", payload: data });
    });
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading2, setLoading2] = useState(0);
  const refresh = () => {
    if (loading2 === 0) {
      setLoading2(1);
      dispatch(
        getq(user.center_id, () => {
          setLoading2(0);
        })
      );
    }
  };
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
            <button
              style={{
                margin: "auto",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
              onClick={refresh}
              className="mt-1 mb-2 primary-button"
              size="md"
            >
              <img src="/imgs/refresh.svg" /> Tap to Refresh
            </button>
            {loading2 ? (
              <Spinner color="primary" />
            ) : (
              <QueueTable socket={socket} user={user} center={center} />
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdminPage;
