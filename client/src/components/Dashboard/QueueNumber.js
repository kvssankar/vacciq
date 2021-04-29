import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./QueueNumber.scss";
import QueueTable from "./QueueTable";

const QueueNumber = (props) => {
  return (
    <div className="row d-flex justify-content-between queuenumbercontainer">
      <div className="p-2 col-example">
      <div className="row texts">
        <h5 className="fontstyle1 ml-1">
          Good Morning, <br></br>Sriesh
        </h5>
        <h6 className="fontstyle1small mt-5 ml-3">Waiting in Queue,<br></br>Anywhere and Anytime</h6>
      </div>
      </div>
      <div className="p-2 col-example">
      <div className="mr-auto">
      </div>
      <img className=" queuenumberman" src="/imgs/man.png"></img>
      </div>
    </div>
  );
};
export default QueueNumber;
