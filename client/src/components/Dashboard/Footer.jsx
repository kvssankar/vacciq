import React from "react";
import { Container } from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg";
import home from "../../img/home.svg";
import { useHistory } from "react-router";
const Example = () => {
  const history = useHistory();

  return (
    <Container className="themed-container" fluid={true}>
      <div className="footer" style={{ zIndex: 111 }}>
        <div className="d-flex justify-content-between">
            <a href="/dashboard" className=" qnodisplay btn btn-outline-primary">
                QNO: 3
            </a>
            <button
              style={{
                margin: "0",
                padding: "0",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={() => {
                history.push("/userdashboard");
              }}
            >
              <img src={home} width="24px" alt="Profile"></img>
            </button>
            <button
              style={{
                margin: "0",
                padding: "0",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={() => {
                localStorage.removeItem("state");
                history.push("/");
              }}
            >
              <img src={logout} alt="Profile"></img>
            </button>
        </div>
      </div>
    </Container>
  );
};

export default Example;
