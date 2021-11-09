import React, { useEffect, useState } from "react";
import "./Profile.css";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

let token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
if (token) config.headers["auth-token"] = token;

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [qname, setQname] = useState("");
  const [loading, setLoading] = useState(0);
  const [loading1, setLoading1] = useState(0);
  const [myqs, setMyqs] = useState([]);
  const addqueue = () => {
    if (qname == "") return;
    setLoading(1);
    axios
      .post("/api/q/addq", { qname }, config)
      .then((res) => {
        dispatch({ type: "GET_QUEUE", payload: res.data.queue });
        dispatch({ type: "UPDATE_USER", payload: res.data.user });
        setMyqs(res.data.user.myqueues);
        setLoading(0);
        setQname("");
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err.response.data,
        });
        setLoading(0);
      });
  };
  const changeq = (id) => {
    setLoading1(1);
    axios
      .post("/api/q/setq", { queue_id: id }, config)
      .then((res) => {
        dispatch({ type: "GET_QUEUE", payload: res.data.queue });
        dispatch({ type: "UPDATE_USER", payload: res.data.user });
        setMyqs(res.data.user.myqueues);
        setLoading1(0);
        history.push("/admin");
      })
      .catch(() => {
        setLoading1(0);
      });
  };
  useEffect(() => {
    setLoading1(1);
    axios
      .get("/api/q/getall", config)
      .then((res) => {
        setLoading1(0);
        dispatch({ type: "UPDATE_USER", payload: res.data.user });
        setMyqs(res.data.user.myqueues);
      })
      .catch(() => {
        setLoading1(0);
      });
  }, []);
  return (
    <div className="signuppagecontainer container">
      <Navbar />
      <div className="mt-5 profilepic">
        <img
          className=""
          style={{
            display: "block",
            margin: "auto",
          }}
          src={user.sex == 0 ? "/imgs/profile.svg" : "/imgs/man.png"}
          alt="loading..."
        ></img>
        <h5
          className="mt-2"
          style={{
            textAlign: "center",
          }}
        >
          {user.name}
        </h5>
        <h6
          className="mt-2 mb-3"
          style={{
            textAlign: "center",
            fontWeight: "500",
            opacity: "60%",
          }}
        >
          {user.phone}
        </h6>
      </div>
      <div className="profilecards">
        <button
          style={{
            margin: "auto",
            width: "100%",
            padding: "10px",
          }}
          className="primary-button"
          size="md"
          onClick={() => history.push("/edit-profile")}
        >
          Edit Profile
        </button>
        <hr />
        <input
          type="text"
          onChange={(e) => setQname(e.target.value)}
          value={qname}
          className="form-input"
          placeholder="Enter Queue Name"
        />
        <button
          style={{
            margin: "auto",
            width: "100%",
            padding: "10px",
          }}
          className="primary-button"
          size="md"
          onClick={addqueue}
        >
          {loading == 1 ? <Spinner color="primary" /> : "Add Queue"}
        </button>
        <h4 className="mt-3">My Queues</h4>
        <hr />
        <ul className="list-group">
          {loading1 == 1 ? (
            <Spinner />
          ) : (
            myqs.map((q, i) =>
              q._id == user.center_id ? (
                <li className="list-group-item active" key={q._id}>
                  {i + 1}. {q.name}
                </li>
              ) : (
                <li
                  className="list-group-item"
                  key={q._id}
                  onClick={() => changeq(q._id)}
                >
                  {i + 1}. {q.name}
                </li>
              )
            )
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
