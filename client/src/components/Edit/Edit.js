import React, { useState } from "react";
import "./Edit.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../actions/userActions";
import { Spinner } from "reactstrap";

const Edit = () => {
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const next = () => {
    history.push("/userdashboard");
    setLoading(false);
  };
  const done = async () => {
    setLoading(true);
    dispatch(update(phone, password, name, email, next));
  };
  return (
    <div
      className="signuppagecontainer container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="row d-flex ml-3 mt-3 ">
        <img
          src="/imgs/back.png"
          alt="loading..."
          onClick={() => history.push("/")}
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>Edit details</h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input
          type="text"
          className="form-input"
          required
          placeholder="Change name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          required
          placeholder="Change Phone Number"
          value={phone}
          pattern="[6-9]{1}[0-9]{9}"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="form-input"
          required
          placeholder="Change Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          required
          placeholder="Change Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        style={{
          margin: "auto",
          width: "85%",
          padding: "10px",
          textAlign: "center",
        }}
        className="mt-2 primary-button"
        onClick={done}
        size="md"
      >
        {loading ? <Spinner color="light" /> : "Confirm"}
      </button>
    </div>
  );
};

export default Edit;
