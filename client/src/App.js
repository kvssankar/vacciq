import './App.css';
import React, { useState } from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { Details } from './components/Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRote";
import QueueNumber from "./components/Dashboard/QueueNumber";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import {Stats} from './components/Dashboard/Stats.js'



function App() {

  let data =
  {
    name: "Vinamra Khoria",
    email: "vinamrakhoria@gmail.com",
    phone: "8290469207",
    centreName: "Centre 1",
    centreAddress: "M.G. Road",
    centrePhone: "9756481230",
    date: "05/05/2021",
    time: "10:00AM"
  }

  return (
    <Router>

      <Switch>

        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
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


        <Route exact path='/pp' render={(props) => <ProfilePicture data={data} />}/>
        <Route exact path='/stats' render={(props) => <Stats/>}/>


      </Switch>
    </Router>
    // <ProfilePicture data = {data}/>
  );
}

export default App;
