import React from "react";
import { Route, Redirect } from "react-router-dom";

const QueueDetails = (props) => {
  return (
    <div className="mt-4 queuedetailsconatiner">
        <div className="d-flex justify-content-between row">
            <div className="rectanglebackground2 flex-fill p-2 col-example ">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Estimated Time</div>
                <div className="fontstyle1small textcenter p-2 col-example ">10:00:00</div>
                </div>
            </div>
            <div className="rectanglebackground2_1 flex-fill  p-2 col-example justify-content-center align-items-center">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Your Position</div>
                <div className="fontstyle1small textcenter p-2 col-example ">12</div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default QueueDetails;
