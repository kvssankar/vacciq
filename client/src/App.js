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
    //   }, [5000]);
    socket.on("userdata", (data) => {
      console.log(data);
      dispatch({ type: "UPDATE_USER", payload: data });
    });
  }, [isLogin, dispatch, socket, user._id]);
  let data = {
    name: "Vinamra Khoria",
    email: "vinamrakhoria@gmail.com",
    phone: "8290469207",
    centreName: "Centre 1",
    centreAddress: "M.G. Road",
    centrePhone: "9756481230",
    date: "05/05/2021",
    time: "10:00AM",
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/app" component={Profile} />
        <Route path="/register" exact component={Register} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/create" exact component={QueueCreate} />
        <Route path="/quicklogin" exact component={LoginReduced} />
        <Route path="/profile" exact component={Profile} />
        {/*  <Route
          path="/about"
          render={(props) => (
            <div>
              <Navbar />
              <MobileAbout />
            </div>
          )}
        />
        <Route
          path="/clubs"
          render={(props) => (
            <div>
              <Navbar />
              <Clubs />
            </div>
          )}
        />
        <Route path="/testing" component={Testing} />
        <Route path="/memberpanel" component={MemPanel} />
        <PrivateRoute
          path="/"
          component1={Navbar}
          component2={Landing}
          component3={Login}
          component4={About}
        /> */}

        <Route
          exactpath="/u/:pp/"
          render={(props) => <ProfilePicture data={data} />}
        />
        <Route exactpath="/u/:stats/" render={(props) => <QueueNumber />} />
      </Switch>
      <CustomAlert />
    </Router>
    // <ProfilePicture data = {data}/>
  );
}

export default App;
