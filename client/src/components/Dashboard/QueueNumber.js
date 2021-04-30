import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./QueueNumber.scss";
import QueueTable from "./QueueTable";

const QueueNumber = (props) => {
  return (
    <div className=" row d-flex justify-content-between queuenumbercontainer">
      <div className="p-2 col-example">
        <div className="texts ">
          <h6 className="fontstyle1small pb-5 mt-3">
            Waiting in Queue,<br></br>Anywhere and Anytime
          </h6>
        </div>
      </div>
      <img
        className=" queuenumberman"
        src="/imgs/man.png"
        alt="loading..."
      ></img>
    </div>
  );
};
export default QueueNumber;
