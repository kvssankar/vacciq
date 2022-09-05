import React, { useEffect, useState } from "react";
import "./QueueTable.css";
import PropTypes from "prop-types";

const QueueTable = ({ user, queue }) => {
  const [line, setLine] = useState([]);
  useEffect(() => {
    setLine(queue.line);
  }, [queue, user]);
  return (
    <div className="mt-4 queuetablecontainer">
      {line.map((lineuser, i) => {
        return (
          <div
            key={i}
            className="rectanglebackground profile d-flex  align-items-center"
          >
            <div
              style={{
                paddingLeft: "15px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              className="queuetablepart2 p-2 col-example text-left"
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

QueueTable.propTypes = {
  user: PropTypes.object.isRequired,
  queue: PropTypes.object.isRequired,
};

export default QueueTable;
