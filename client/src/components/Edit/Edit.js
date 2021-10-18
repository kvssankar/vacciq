import React, { useState } from "react";
import "./Edit.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";

const Edit = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const done = () => {
    dispatch(register(name, email, phone, history));
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
          placeholder="Enter new Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          required
          placeholder="Enter new Phone Number"
          value={phone}
          pattern="[6-9]{1}[0-9]{9}"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="form-input"
          required
          placeholder="Enter new Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        style={{ margin: "auto", width: "85%", padding: "10px" }}
        className="mt-2 primary-button"
        onClick={done}
        size="md"
      >
        Confirm
      </button>
    </div>
  );
};

export default Edit;
