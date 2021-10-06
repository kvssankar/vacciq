import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "./Footer.css";
import logout from "../../img/logout.svg";
import home from "../../img/home.svg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getq } from "../../actions/queueActions";

const Example = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [qno, setQno] = useState(0);
  let queue = useSelector((state) => state.userReducer.queue);
  let user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    async function temp() {
      if(!queue)
        await dispatch(getq(user.queue_id || user.center_id, () => null));
      if (queue) {
        for (var i = 0; i < queue.line.length; i++) {
          setQno(i + 1);
          if (queue.line[i].user._id === user._id) {
            break;
          }
        }
      }
    }
    temp();
    //TODO: UTIL FUNCTION FOR QUEUE
  }, [queue]);
  return (
    <Container className="themed-container" fluid={true}>
      <div className="footer" style={{ zIndex: 111 }}>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-4">
            {queue ? (
              <a
                href={user.queue_id ? "/dashboard" : "/admin"}
                className=" qnodisplay btn btn-outline-primary"
              >
                QNO: {qno}
              </a>
            ) : (
              <img
                className="barcodeimg"
                src="/imgs/barcode.png"
                alt="barcodeScanner"
              ></img>
            )}
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
              onClick={async () => {
                dispatch({ type: "LOGOUT" });
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
