import React from "react";
import "./QueueNumber.scss";

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
        src="/imgs/avatars-wearing-fabric-masks-protection_52683-41294 1.png"
        alt="loading..."
      ></img>
    </div>
  );
};
export default QueueNumber;
