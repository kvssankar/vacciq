import React from "react";
import {Container} from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg"
import home from "../../img/home.svg"
import dashboard from "../../img/square.svg"
import { useHistory } from "react-router";
const Example = () => {
const history=useHistory()

  return (
    
    <Container className="themed-container" fluid={true}>
       <div className="footer">
          <div className="d-flex justify-content-between">
            <div className="p-3 col-example text-left"><a href="/dashboard"><img src={dashboard} alt="loading..."></img></a></div>
            <div className="p-3 col-example text-left"><a href="/userdashboard"><img src={home} alt="Profile"></img></a></div>
            <div className="p-3 col-example text-left"><a href="#" onClick={()=>{localStorage.removeItem("state");history.push("/")}}><img src={logout} alt="Profile"></img></a></div>
          </div>
        </div>
    </Container>
  );
};

export default Example;
