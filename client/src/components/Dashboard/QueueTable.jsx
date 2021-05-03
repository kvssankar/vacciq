import React, { useEffect, useState } from "react";
import "./QueueTable.css";
const QueueTable = ({user,queue}) => {
  const [line,setLine]=useState([]);
  const [no,setNo]=useState(0);
  useEffect(()=>{
    setLine(queue.line.slice(0,queue.limit));
    console.log(line[0])
    for(var i=0;i<queue.line.length;i++){
      if(queue.line[i].user._id===user._id){
        setNo(i+1);
      }
    }
  },[user,queue,line])
  return (
    <div className="mt-4 queuetablecontainer" style={{marginBottom:"5rem"}}>
      <h5 className="ml-2 ">Queue Table</h5>
     
     {no>queue.limit ? <>
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
     
     <div className="rectanglebackground profile d-flex justify-content-between align-items-center">
     <div className="queuetablepart1 p-2 col-example text-left">
       <img className="profilepictable" src="/imgs/profile.png" alt="loading..."></img>
     </div>
     <div className="queuetablepart2 p-2 col-example text-left">
       <div className=" d-flex flexcolumn">
         <h6 className="queuetablepart2h6">{user.name}</h6>
         <h6 className="fontstyle1small queuetablepart2h6">Area</h6>
       </div>
     </div>
     <div className="queuetablepart3 p-2 col-example text-left">
      <h4 className="queuetablepart3h4">{no}</h4>
     </div>
   </div>
     
      </> : 
      
      <>
      {line.map((lineuser,i)=>(
        <div key={i} style={{background: lineuser._id===user._id ? "" : ""}} className="rectanglebackground profile d-flex justify-content-between align-items-center">
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
      </>
      
      }
  
      
    </div>
  );
};

export default QueueTable;
