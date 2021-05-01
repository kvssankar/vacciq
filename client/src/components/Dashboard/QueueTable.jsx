import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import "./QueueTable.css";
const QueueTable = ({user}) => {
  const [line,setLine]=useState([]);
  useEffect(()=>{
    setLine(user.queue_id.line);
    console.log(user.queue_id.line)
  },[user])
  return (
    <div className="mt-4 queuetablecontainer" style={{marginBottom:"5rem"}}>
      <h5 className="ml-2 ">Queue Table</h5>
     
     {line.map((lineuser,i)=>(
        <div key={i} className="rectanglebackground profile d-flex justify-content-between align-items-center">
        <div className="queuetablepart1 p-2 col-example text-left">
          <img className="profilepictable" src="/imgs/profile.png" alt="loading..."></img>
        </div>
        <div className="queuetablepart2 p-2 col-example text-left">
          <div className=" d-flex flexcolumn">
            <h6 className="queuetablepart2h6">{lineuser.user.name}</h6>
            <h6 className="fontstyle1small queuetablepart2h6">Area</h6>
          </div>
        </div>
        <div className="queuetablepart3 p-2 col-example text-left">
         <h4 className="queuetablepart3h4">{i+1}</h4>
        </div>
      </div>
     ))}

      
    </div>
  );
};

export default QueueTable;
