import React, { useState } from "react";
import "./signin.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";
import loginsvg from "../../img/login.svg";
import { Spinner } from "reactstrap";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  //loading
  const [loading, setLoading] = useState(false);
  const next = () => {
    setLoading(false);
    history.push("/userdashboard");
  };
  const done = () => {
    setLoading(true);
    dispatch(login(phone, password, next));
  };
  return (
    <div
      className="signuppagecontainer container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
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
        <img height="200" src={loginsvg} alt="" />
        <h4 className="mt-2">Welcome Back</h4>
      </div>
      <div className="ml-4 mr-4 signupform">
        <input
          type="number"
          className="form-input"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-2  justify-content-center d-flex">
        <p>
          Dont have an account?{" "}
          <a
            style={{ color: "#42c3fc", textDecoration: "none" }}
            href="/register"
          >
            Sign Up
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
        onClick={done}
        className="mt-2 primary-button"
        size="md"
      >
        {loading ? <Spinner color="light" /> : "Login"}
      </button>
    </div>
  );
};

export default Signup;
