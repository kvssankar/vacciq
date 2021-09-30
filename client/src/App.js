import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPage from "./pages/Admin";
import QueueCreate from "./pages/CreateQueue";
import LoginReduced from "./pages/ReducedLogin";
import Edit from "./pages/Edit";
import Barcode from "./pages/Barcode";
import UserDashboard from "./pages/UserDashboard";
import CustomAlert from "./components/CustomAlert";
import { useDispatch, useSelector } from "react-redux";

import { getq } from "./actions/queueActions";

import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

function App() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const socket = socketIOClient(ENDPOINT);

  const floading = () => {
    socket.emit("joinQ", {
      qid: user.queue_id || user.center_id,
      uid: null,
    });
    socket.on("qdata", (data) => {
      dispatch({ type: "GET_QUEUE", payload: data });
    });
  };

  useEffect(() => {
    if (user.center_id) dispatch(getq(user.center_id, floading));
    if (user.queue_id) dispatch(getq(user.queue_id, floading));
    return () => socket.disconnect();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/scan" exact component={Barcode} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/userdashboard" exact component={UserDashboard} />
        <PrivateRoute path="/admin" exact component={AdminPage} />
        <Route path="/create" exact component={QueueCreate} />
        <Route path="/quicklogin/:qid" component={LoginReduced} />
        <Route path="/edit-profile" component={Edit} />
      </Switch>
      <CustomAlert />
    </Router>
  );
}

export default App;
