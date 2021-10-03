import React, { useEffect, useState } from "react";
import "./QueueTable.css";
const QueueTable = ({ user, queue }) => {
  const [line, setLine] = useState([]);
  const [no, setNo] = useState(0);
  useEffect(() => {
    setLine(queue.line.slice(0, queue.limit));
    for (var i = 0; i < queue.line.length; i++) {
      if (queue.line[i].user._id === user._id) {
        setNo(i + 1);
      }
    }
  }, [queue, user]);
  return (
    <div className="mt-4 queuetablecontainer" style={{ marginBottom: "5rem" }}>
      <h5 className="ml-2 ">Queue Table</h5>

      {line.map((lineuser, i) => {
        return lineuser._id !== user._id ? (
          <div
            key={i}
            className="rectanglebackground profile d-flex  align-items-center"
          >
            {/* <div className="queuetablepart1 p-2 col-example text-left">
              <img
                className="profilepictable"
                src="/imgs/profile.png"
                alt="loading..."
              ></img>
            </div> */}
            <div
              style={{
                paddingLeft: "15px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              lassName="queuetablepart2 p-2 col-example text-left"
            >
              <div className=" d-flex flexcolumn">
                <h6
                  style={{
                    color: "rgba(66, 195, 252, 1)",
                  }}
                  className="queuetablepart2h6"
                >
                  {i + 1}
                </h6>
              </div>
            </div>
            <div className="queuetablepart2 ml-5 col-example">
              <div className="d-flex flexcolumn">
                <h6
                  style={{ color: "rgba(66, 195, 252, 1)" }}
                  className="queuetablepart2h6"
                >
                  {lineuser.user.name}
                </h6>
                {/* <h6 className="fontstyle1small queuetablepart2h6">Area</h6> */}
              </div>
            </div>
            {/* <div className="queuetablepart3 p-2 col-example text-left">
              <h6
                style={{
                  color: "rgba(66, 195, 252, 1)",
                  maxWidth: "200px",
                  overflowWrap: "break-word",
                  margin: "0",
                }}
                className=""
              >
                {" "}
                Location - Shankar nagar
              </h6>
            </div> */}
          </div>
        ) : (
          <div
            style={{ background: "rgb(255 182 79)" }}
            className="rectanglebackground profile d-flex justify-content-between align-items-center"
          >
            <div className="queuetablepart1 p-2 col-example text-left">
              <img
                className="profilepictable"
                src="/imgs/profile.png"
                alt="loading..."
              ></img>
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
        );
      })}
      {no > queue.limit && (
        <div
          style={{ background: "rgb(255 182 79)" }}
          className="rectanglebackground profile d-flex justify-content-between align-items-center"
        >
          <div className="queuetablepart1 p-2 col-example text-left">
            <img
              className="profilepictable"
              src="/imgs/profile.png"
              alt="loading..."
            ></img>
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
      )}
    </div>
  );
};

export default QueueTable;
