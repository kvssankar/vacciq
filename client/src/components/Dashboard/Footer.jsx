import React from "react";
import {Container} from "reactstrap";
import "./Footer.css";
const Example = () => {


  return (
    
    <Container className="themed-container" fluid={true}>
       <div className="footer">
          <div className="d-flex justify-content-between">
            <div className="p-3 col-example text-left"><a href="https://www.google.com"><img src="/imgs/footer-1.png" alt="loading..."></img></a></div>
            <div className="p-3 col-example text-left"><img src="/imgs/footer-2.png" alt="Profile"></img></div>
            <div className="p-3 col-example text-left"><img src="/imgs/footer-3.png" alt="Profile"></img></div>
          </div>
        </div>
    </Container>
  );
};

export default Example;
