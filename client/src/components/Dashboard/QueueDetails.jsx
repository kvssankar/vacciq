import React, { useEffect, useState } from "react";

const QueueDetails = ({user}) => {
  const [qno,setQno]=useState(0);
  useEffect(()=>{
    setQno();
    for(var i=0;i<user.queue_id.line.length;i++){
      setQno(i+1);
      if(user.queue_id.line[i]===user._id){
        break;
      }
    }
  },[user])
  return (
    <div className="mt-4 queuedetailsconatiner">
        <div className="d-flex justify-content-between row">
            <div className="rectanglebackground2 flex-fill p-2 col-example ">
                <div className="flexdirection" style={{alignItems:"center"}}>
                <div className="fontstyle1small textcenter p-2 col-example ">Estimated Time</div>
                <div className="fontstyle1small textcenter p-2 col-example ">10:00:00</div>
                </div>
            </div>
            <div className="rectanglebackground2_1 flex-fill  p-2 col-example justify-content-center align-items-center">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Your Position</div>
                <div className="fontstyle1small textcenter p-2 col-example ">{qno}</div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default QueueDetails;
