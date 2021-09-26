import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToQ } from "../../actions/queueActions";
import axios from "axios";

const ReducedLogin = ({ qid }) => {
  const [q, setQ] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();

  useEffect(() => {
    if (isLogin) {
      setName(user.name);
      setPhone(user.phone);
    }
    axios.post("/api/q/details", { qid }).then((res) => {
      setQ(res.data.q);
    });
  }, [qid, isLogin, user]);

  const send = () => {
    dispatch(addToQ(name, phone, qid, history));
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
          style={{ margin: "auto", width: "100%", padding: "10px" }}
          className="mt-5 primary-button"
          onClick={send}
          size="md"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default ReducedLogin;
