import './App.css';
import React, {useState} from 'react';
import {ProfilePicture} from './components/ProfilePicture';
import {Details} from './components/Details';

function App() {

  let data = 
    {
      name : "Vinamra Khoria",
      email : "vinamrakhoria@gmail.com",
      centreName : "Centre 1",
      centreAddress : "M.G. Road",
      centrePhone: "9756481230",
      date: "05/05/2021",
      time: "10:00AM"
    }
  

  return (
    <div>
      <ProfilePicture data = {data}/>
      <Details data = {data}/>
    </div>
  );
}

export default App;
