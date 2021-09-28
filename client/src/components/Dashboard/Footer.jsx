import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg";
import home from "../../img/home.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Example = () => {
  const history = useHistory();
  const [qno, setQno] = useState(0);
  const queue = useSelector((state) => state.userReducer.queue);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(()=>{
    if(queue){
      for (var i = 0; i < queue.line.length; i++) {
        setQno(i + 1);
        if (queue.line[i].user._id === user._id) {
          break;
        }
      }
    }
  },[queue,user])
  return (
    <Container className="themed-container" fluid={true}>
      <div className="footer" style={{ zIndex: 111 }}>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-4">
            {queue ? <a
              href="/dashboard"
              className=" qnodisplay btn btn-outline-primary"
            >
              QNO: {qno}
            </a> :  <img
            className="barcodeimg"
            src="/imgs/barcode.png"
            alt="barcodeScanner"
          ></img> }
          </div>
          <div style={{ marginLeft: "auto auto" }} className="col-4">
            {" "}
            <button
              style={{
                marginLeft: "48%",
                padding: "0",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={() => {
                history.push("/userdashboard");
              }}
            >
              <img src={home} width="25px" alt="Profile"></img>
            </button>
          </div>
          <div style={{ margin: "auto auto" }} className="col-4">
            <button
              style={{
                marginLeft: "90%",
                padding: "0",
                border: "none",
                backgroundColor: "white",
              }}
              onClick={() => {
                localStorage.removeItem("state");
                history.push("/");
              }}
            >
              <img src={logout} width="25px" alt="Profile"></img>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Example;
