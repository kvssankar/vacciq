import React, { useEffect, useState } from "react";
//import { findEstimationTime, findReachingTime, secondsToTime } from "../../Util";
import { findEstimationTime } from "../../Util";

import PropTypes from "prop-types";

const QueueDetails = ({ user, queue }) => {
  const [rt, setRt] = useState("-");
  const [et, setEt] = useState(10);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
      });
    }
    setEt(findEstimationTime(user, queue));
    setRt("-");
    // findReachingTime(user).then(data=>setRt(secondsToTime(data)))
  }, [queue, user]);

  //TODO: On refresh also  do reaching time update

  return (
    <div className="mt-4 queuedetailsconatiner">
      <div className="d-flex justify-content-between row">
        <div className="rectanglebackground2 flex-fill p-2 col-example ">
          <div className="flexdirection" style={{ alignItems: "center" }}>
            <div className="fontstyle1small textcenter p-2 col-example ">
              Estimated Time
            </div>
            <div className="fontstyle1small textcenter p-2 col-example ">
              {et} mins
            </div>
          </div>
        </div>
        <div className="rectanglebackground2 flex-fill p-2 col-example ">
          <div className="flexdirection" style={{ alignItems: "center" }}>
            <div className="fontstyle1small textcenter p-2 col-example ">
              Reaching Time
            </div>
            <div className="fontstyle1small textcenter p-2 col-example ">
              {rt}
            </div>
          </div>
        </div>
        <h3 className="text-center">{queue.name}</h3>
      </div>
    </div>
  );
};

QueueDetails.propTypes = {
  user: PropTypes.object.isRequired,
  queue: PropTypes.object.isRequired,
};

export default QueueDetails;
