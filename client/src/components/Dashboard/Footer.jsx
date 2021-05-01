import React from "react";
import {Container} from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg"
import { useHistory } from "react-router";
const Example = () => {
const history=useHistory()

  return (
    
    <Container className="themed-container" fluid={true}>
       <div className="footer">
          <div className="d-flex justify-content-between">
            <div className="p-3 col-example text-left"><a href="/"><img src="/imgs/footer-1.png" alt="loading..."></img></a></div>
            <div className="p-3 col-example text-left"><a href="/userdashboard"><img src="/imgs/footer-2.png" alt="Profile"></img></a></div>
            <div className="p-3 col-example text-left"><a href="#" onClick={()=>{localStorage.removeItem("state");history.push("/")}}><img src={logout} alt="Profile"></img></a></div>
          </div>
        </div>
    </Container>
  );
};

export default Example;
