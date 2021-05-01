import React from "react";
import "./QueueNumber.scss";

const QueueNumber = (props) => {
  return (
    <div className="mt-5  row d-flex justify-content-between queuenumbercontainer">
      <div className="p-2 col-example">
        <div className="texts ">
          <h6 className="ml-4 fontstyle1small pb-5 mt-3">
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
