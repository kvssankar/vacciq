import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToQ } from "../../actions/queueActions";
import axios from "axios";
import { io as socketIOClient } from "socket.io-client";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";

// eslint-disable-next-line no-undef
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

const ReducedLogin = ({ qid }) => {
  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  const socket = socketIOClient(ENDPOINT);

  useEffect(() => {
    if (isLogin) {
      setName(user.name);
      setPhone(user.phone);
    }
    axios.post("/api/q/details", { qid }).then((res) => {
      setQ(res.data.q);
    });
    return () => socket.disconnect();
  }, [qid, isLogin, user]);

  const next = () => {
    setLoading(false);
    socket.emit("joinQ", {
      qid: qid,
    });
    history.push("/dashboard");
  };

  const send = () => {
    setLoading(true);
    dispatch(addToQ(name, phone, qid, next));
  };
  return (
    <div className="customqueuecontainer">
      <div className="row d-flex ml-3 mt-3 ">
        <img
          src="/imgs/back.png"
          alt="loading..."
          onClick={() => history.goBack()}
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>
          Join this {q ? q : "loading..."} now<br></br> Enter the following
          details !
        </h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input
          type="text"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="form-input"
          placeholder="Phone number"
        />

        <button
          style={{
            margin: "auto",
            width: "100%",
            padding: "10px",
            textAlign: "center",
          }}
          className="mt-5 primary-button"
          onClick={send}
          size="md"
        >
          {loading ? <Spinner color="light" /> : "Join"}
        </button>
      </div>
    </div>
  );
};

ReducedLogin.propTypes = {
  qid: PropTypes.string.isRequired,
};

export default ReducedLogin;
