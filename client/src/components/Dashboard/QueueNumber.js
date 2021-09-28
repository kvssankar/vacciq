import React, { useEffect, useState } from "react";
import "./QueueNumber.scss";

const QueueNumber = ({ user, queue }) => {
  const [qno, setQno] = useState(0);
  useEffect(() => {
    for (var i = 0; i < queue.line.length; i++) {
      setQno(i + 1);
      if (queue.line[i].user._id === user._id) {
        break;
      }
    }
  }, [user, queue]);
  return (
    <div className="  row d-flex shine justify-content-between queuenumbercontainer">
      <div className="p-2 col-example">
        <div className="texts ">
          <h6 className="ml-4 fontstyle1small pb-5 mt-3">
            <h5>Your Position</h5>
            <h3>{qno}</h3>
          </h6>
        </div>
      </div>
      <img
        className=" queuenumberman"
        style={{ zIndex: 2 }}
        src="/imgs/person1.svg"
        alt="loading..."
      ></img>
    </div>
  );
};
export default QueueNumber;
