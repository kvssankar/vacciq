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
import Edit from "./pages/Edit";
import Barcode from "./pages/Barcode";
import UserDashboard from "./pages/UserDashboard";
import AboutPage from "./pages/About";
import Pricing from "./pages/Pricing";
import CustomAlert from "./components/CustomAlert";
import ProfilePage from "./components/ProfilePage/Profile";

function App() {
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
        <Route path="/profile" component={ProfilePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
      <CustomAlert />
    </Router>
  );
}

export default App;
