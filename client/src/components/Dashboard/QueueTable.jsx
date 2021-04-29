import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./QueueTable.css";
const QueueTable = ({}) => {
  return (
    <div className="queuetablecontainer">
      <h5 className="ml-2 ">Queue Table</h5>
      <div className="profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/profile.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left">
          <div className=" d-flex flexcolumn">
            <h6 className="queuetablepart2h6">Sriesh Agrawal</h6>
            <h6 className="queuetablepart2h6">Area</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
         <h4 className="queuetablepart3h4">1</h4>
        </div>
      </div>

      <div className="profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/profile.png"></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left">
          <div className=" d-flex flexcolumn">
            <h6 className="queuetablepart2h6">Sriesh Agrawal(2)</h6>
            <h6 className="queuetablepart2h6">Area(2)</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
         <h4 className="queuetablepart3h4">2</h4>
        </div>
      </div>
    </div>
  );
};

export default QueueTable;
