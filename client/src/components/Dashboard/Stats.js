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
      <Navbar />
      <div className="container" >
        <h5 className="fontstyle1 mt-5 ml-2">
          Good Morning, <br></br>Sriesh
        </h5>
        <QueueNumber image = "./imgs/Girl.png"/>
      </div>
      <Footer />
    </div>
    )
}
