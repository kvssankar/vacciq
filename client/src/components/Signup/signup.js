import React, { useState } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import { Spinner } from "reactstrap";

const Signup = () => {
  const [sex, setSex] = useState(1);
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const next = () => {
    setLoading(false);
    history.push("/userdashboard");
  };
  const done = () => {
    dispatch(register(name, email, phone, password, sex, next));
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
        <h5>
          Sign Up and <br></br> Get Started !
        </h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input
          type="text"
          className="form-input"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          required
          placeholder="Phone Number"
          value={phone}
          pattern="[6-9]{1}[0-9]{9}"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="form-input"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          required
          placeholder="Password"
          value={password}
          pattern="^(?=.*\d).{8,}$"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="radio"
          className="radio"
          id="male"
          checked={sex}
          onClick={() => {
            setSex(!sex);
          }}
          name="radio"
        />
        <label className="radio-label" htmlFor="male">
          Male
        </label>
        <input type="radio" className="radio" id="female" name="radio" />
        <label
          className="radio-label"
          checked={!sex}
          onClick={() => {
            setSex(!sex);
          }}
          htmlFor="female"
        >
          Female
        </label>
      </div>
      <div className="mt-3 row justify-content-center d-flex">
        <p>
          Already have an account?{" "}
          <a style={{ color: "#42c3fc", textDecoration: "none" }} href="/login">
            Sign In
          </a>{" "}
        </p>
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
        {loading ? <Spinner color="light" /> : "Register"}
      </button>
    </div>
  );
};

export default Signup;
