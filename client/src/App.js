import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRote";
import QueueNumber from "./components/Dashboard/QueueNumber";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import AdminPage from "./pages/Admin";


const App = () => {
  return (
    <Router>
      {/* <Loading /> */}
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={Dashboard} />
        <Route path="/login" exact component={Auth} />
        <Route path="/admin" exact component={AdminPage} />
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
      </Switch>
    </Router>
  );
};

export default App;
