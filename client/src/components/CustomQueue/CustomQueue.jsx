import React, { useState } from "react";
import "./CustomQueue.css";
import { useDispatch } from "react-redux";
import { createQ } from "../../actions/queueActions";
import { useHistory } from "react-router";
import { Alert, Spinner } from "reactstrap";

const CustomQueue = () => {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState();
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const cq =  () => {
    let lat,long;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        lat= position.coords.latitude;
        long= position.coords.longitude;
      });
    }
    setLoading(true);
    dispatch(createQ(name, limit, time,lat,long,()=>{
      setLoading(false);
      history.push("/userdashboard");
    }));
  };
  return (
    <div className="customqueuecontainer">
      <div className="row d-flex ml-3 mt-3 ">
        <img
          onClick={() => history.push("/userdashboard")}
          src="/imgs/back.png"
          alt="loading..."
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>
          Create your own Queue <br></br> INSTANTLY !
        </h5>
      </div>
      <Alert color="warning" className="mt-3">You you have created a queue already it will be vanished</Alert>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          className="form-input"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          placeholder="Maximum number of people"
        />
        <input
          type="number"
          className="form-input"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Average time per person"
        />
        <button
          style={{ margin: "auto", width: "100%", padding: "10px",textAlign:"center" }}
          className="mt-5 primary-button"
          size="md"
          onClick={cq}
        >
          {loading ? <Spinner color="light" /> : "Create Queue"}
        </button>
      </div>
    </div>
  );
};

export default CustomQueue;

//TODO: Temperory users cannot create queue {in backed remove queue and make all users in queue exit}
//TODO: If already created a queue then show if error warning