import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Navbar, NavbarBrand, Nav, Spinner } from "reactstrap";
import { removeFromQ } from "../../actions/queueActions";
import "./Navbar.css";

import PropTypes from "prop-types";

const Example = (props) => {
  let user = useSelector((state) => state.userReducer.user);
  const [loading, setLoading] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/userdashboard">
          <img className="logonav" src="/imgs/logo.png" alt="loading..."></img>
        </NavbarBrand>
        <Nav className="ml-auto">
          <a href={!user.queue_id ? "/scan" : "#"}>
            {!user.queue_id ? (
              <img
                className="barcodeimg"
                src="/imgs/barcode.png"
                alt="barcodeScanner"
              ></img>
            ) : loading ? (
              <Spinner color="primary" />
            ) : (
              <img
                className="barcodeimg"
                src="/imgs/exit.png"
                alt="exit queue"
                onClick={() => {
                  setLoading(1);
                  dispatch(
                    removeFromQ(user._id, user.queue_id, () => {
                      props.socket.emit("personRemoved", {
                        uid: user._id,
                        qid: user.queue_id,
                      });
                      setLoading(1);
                      history.push("/userdashboard");
                    })
                  );
                }}
              ></img>
            )}
          </a>
          <a href="/profile">
            <img cla src="/imgs/user.png" className="barcodeimg ml-3 mr-0" />
          </a>
        </Nav>
      </Navbar>
    </div>
  );
};

Example.propTypes = {
  socket: PropTypes.object.isRequired,
};

export default Example;
