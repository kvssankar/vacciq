import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import classnames from "classnames";
import QueueNumber from "../components/Dashboard/QueueNumber.js";
import QueueTable from "../components/Dashboard/QueueTable";
import Navbar from "../components/Dashboard/Navbar";
import Headlines from "../components/Profile/Headlines.js";
import QueueDetails from "../components/Dashboard/QueueDetails";
import Footer from "../components/Dashboard/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions.js";
import Loading from "../components/Loading.js";
import { io as socketIOClient } from "socket.io-client";
import { useHistory } from "react-router";
import { notifyMe } from "../Util.js";

// eslint-disable-next-line no-undef
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

const Dashboard = () => {
  let user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);
  const [loading, setLoading] = useState(1);
  const [loading2, setLoading2] = useState(0);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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
  const refresh = () => {
    if (loading2 === 0) {
      setLoading2(1);
      dispatch(
        getq(user.queue_id, () => {
          setLoading2(0);
        })
      );
    }
  };
  useEffect(() => {
    if (!user.queue_id) history.push("/userdashboard");
    if (loading === 1) dispatch(getq(user.queue_id, floading));
    if (user.queue_id) {
      window.onbeforeunload = function () {
        return "Are you sure you want to leave?";
      };
    }
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
            <QueueNumber user={user} queue={queue} />
            <Nav tabs className="mt-3">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Queue
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  News
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} style={{ marginBottom: "5rem" }}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    {loading2 ? (
                      <Spinner color="primary" />
                    ) : (
                      <QueueTable user={user} queue={queue} />
                    )}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Headlines />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Dashboard;
