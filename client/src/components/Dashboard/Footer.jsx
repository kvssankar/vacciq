import React from "react";
import { Container } from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg";
import home from "../../img/home.svg";
import dashboard from "../../img/square.svg";
import { useHistory } from "react-router";
const Example = () => {
  const history = useHistory();

  return (
    <Container className="themed-container" fluid={true}>
      <div className="footer" style={{ zIndex: 111 }}>
        <div className="d-flex justify-content-between">
          <div className="p-3 col-example text-left">
            <a href="/dashboard">
              <img src={dashboard} width="24px" alt="loading..."></img>
            </a>
          </div>
          <div className="p-3 col-example text-left">
            <a href="/userdashboard">
              <img src={home} width="24px" alt="Profile"></img>
            </a>
          </div>
          <div className="p-3 col-example text-left">
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
      </div>
    </Container>
  );
};

export default Example;
