import React from "react";
// import { Route, Redirect } from "react-router-dom";
import QueueNumber from "./QueueNumber.js";
import QueueTable from "./QueueTable.jsx";
import Navbar from "./Navbar";
import QueueDetails from "./QueueDetails.jsx";
import Footer from "./Footer.jsx";

export const Stats = () => {
  return (
    <div>
      <Navbar className = "navbar"/>
     
      <div className="container" >
        <QueueNumber image="./imgs/Girl.png" />
      </div>
      <Footer/>
    </div>
  )
}
