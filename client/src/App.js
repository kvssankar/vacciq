import "./App.css";
import React, { useEffect } from "react";
import { ProfilePicture } from "./components/ProfilePicture";
// import { Details } from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import QueueNumber from "./components/Dashboard/QueueNumber";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPage from "./pages/Admin";
import CustomAlert from "./components/CustomAlert";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import QueueCreate from "./pages/CreateQueue";
import LoginReduced from "./pages/ReducedLogin";
import Profile from "./pages/Profile";
import Barcode from "./pages/Barcode";
import UserDashboard from "./pages/UserDashboard";
const ENDPOINT = "http://localhost:5000/";

function App() {
  let isLogin = useSelector((state) => state.userReducer.isLogin);
  let user = useSelector((state) => state.userReducer.user);
  const socket = socketIOClient(ENDPOINT);

  const dispatch = useDispatch();
  useEffect(() => {
    // if (isLogin)
    //   setInterval(async () => {
    //     await socket.emit("getdata", {
    //       id: user._id,
    //     });
    //   }, [10000]);
    socket.on("userdata", (data) => {
      console.log(data);
      dispatch({ type: "UPDATE_USER", payload: data });
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/scan" exact component={Barcode} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/userdashboard" exact component={UserDashboard} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/create" exact component={QueueCreate} />
        <Route path="/quicklogin/:qid" component={LoginReduced} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
      {/* <CustomAlert /> */}
    </Router>
  );
}

export default App;
