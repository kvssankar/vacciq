import React, { useEffect, useState } from "react";
import "../Dashboard/QueueTable.css";
import kick from "../../img/checked.png";
import { useDispatch } from "react-redux";
import { removeFromQ } from "../../actions/queueActions";
const QueueTable = ({ user, center }) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["auth-token"] = token;
  const [line, setLine] = useState([]);
  useEffect(() => {
    setLine(center.line);
    console.log(center.line);
  }, [center]);
  const dispatch = useDispatch();
  const done = (a) => {
    dispatch(removeFromQ(a, center._id));
  };
  return (
    <div className=" queuetablecontainer" style={{ marginBottom: "5rem" }}>
      <h5 className="pt-3 ml-2 ">Queue Table</h5>

      {line.length > 0 &&
        line.map((lineuser, i) => (
          <div
            key={i}
            className="rectanglebackground profile d-flex justify-content-between align-items-center"
          >
            <div className="queuetablepart3 p-2 col-example text-left">
              <h4 className="queuetablepart3h4">{i + 1}</h4>
            </div>
            <div className="queuetablepart2 p-2 col-example text-left">
              <div className=" d-flex flexcolumn">
                <h6 className="queuetablepart2h6">{lineuser.user.name}</h6>
              </div>
            </div>
            <div className="queuetablepart1 p-2 col-example text-left">
              <img
                onClick={() => done(lineuser.user._id)}
                width="50px"
                src={kick}
                alt="Kick Out"
              ></img>
            </div>
          </div>
        ))}
      {line.length === 0 && (
        <div className="rectanglebackground profile d-flex justify-content-between align-items-center">
          <div className="queuetablepart1 p-2 col-example text-left">
            <img
              className="profilepictable"
              src="/imgs/profile.png"
              alt="loading..."
            ></img>
          </div>
          <div className="queuetablepart2 p-2 col-example text-left">
            <div className=" d-flex flexcolumn">
              <h6 className="queuetablepart2h6">No one yet in the queue</h6>
            </div>
          </div>
          <div className="queuetablepart3 p-2 col-example text-left">
            <h4 className="queuetablepart3h4">0</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default QueueTable;
