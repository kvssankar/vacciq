import React, { useState } from "react";
import "./CustomQueue.css";
import { useDispatch } from "react-redux";
import { createQ } from "../../actions/queueActions";
import { useHistory } from "react-router";
import axios from "axios";

const CustomQueue = () => {
  const [name,setName]=useState("");
  const [limit,setLimit]=useState();
  const [time,setTime]=useState();
  const dispatch=useDispatch();
  const history=useHistory()
  
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["auth-token"] = token;

  const cq = ()=> {
    axios
      .post("/api/q/create", { name, limit, time }, config)
      .then(async(res) => {
        dispatch({
          type: "UPDATE_USER",
          payload: res.data.user,
        });
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: "ERROR",
          payload: err.response.data,
        });
        setTimeout(() => {
          dispatch({ type: "CLEAR_ERROR" });
        }, [5000]);
      });
  };
  return (
    <div class="customqueuecontainer">
      <div className="row d-flex ml-3 mt-3 ">
        <img
        onClick={()=>history.push('/userdashboard')}
          src="/imgs/back.png"
          alt="loading..."
          //   onClick={() => history.push("/")}
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>
          Create your own Queue <br></br> INSTANTLY !
        </h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input type="text" className="form-input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
        <input
          type="number"
          className="form-input"
          value={limit} onChange={(e)=>setLimit(e.target.value)} 
          placeholder="Maximum number of people"
        />
        <input
          type="number"
          className="form-input"
          value={time} onChange={(e)=>setTime(e.target.value)} 
          placeholder="Average time per person"
        />
        <button
          style={{ margin: "auto", width: "100%", padding: "10px" }}
          className="mt-5 primary-button"
          size="md"
          onClick={cq}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CustomQueue;
