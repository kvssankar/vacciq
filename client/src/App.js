import React from "react";
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
import Barcode from "./pages/Barcode";
import UserDashboard from "./pages/UserDashboard";

// import { useDispatch, useSelector } from "react-redux";
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://localhost:5000/";

function App() {
  // let isLogin = useSelector((state) => state.userReducer.isLogin);
  // let user = useSelector((state) => state.userReducer.user);
  // const socket = socketIOClient(ENDPOINT);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isLogin)
  //     setInterval(async () => {
  //       await socket.emit("getdata", {
  //         id: user._id,
  //       });
  //     }, [60000]);
  //   socket.on("userdata", (data) => {
  //     console.log(data);
  //     dispatch({ type: "UPDATE_USER", payload: data });
  //   });
  // }, [dispatch,isLogin,socket,user]);

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
      </Switch>
      {/* <CustomAlert /> */}
    </Router>
  );
}

export default App;
