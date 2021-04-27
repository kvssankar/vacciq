import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      {/* <Loading /> */}
      <Switch>
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
