import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./QueueNumber.scss";
import QueueTable from "./QueueTable";

const QueueNumber = (props) => {
  return (
    <div
      className="row d-flex justify-content-between queuenumbercontainer"
      style={{ background: "rgb(223 241 250)", borderRadius: "10px" }}
    >
      <div className="p-2 col-example">
        <div className="row texts">
          <h6 className="fontstyle1small mt-5 ml-3">
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
