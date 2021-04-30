import './App.css';
import React, { useState } from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { Details } from './components/Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QueueNumber from './components/QueueNumber';


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

        <Route exactpath='/u/:pp/' render={(props) => <ProfilePicture data={data} />}/>
        <Route exactpath='/u/:stats/' render={(props) => <QueueNumber/>}/>

      </Switch>
    </Router>
    // <ProfilePicture data = {data}/>
  );
}

export default App;
