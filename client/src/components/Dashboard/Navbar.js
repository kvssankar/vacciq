import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Navbar, NavbarBrand, Nav, NavLink } from "reactstrap";
import { removeFromQ } from "../../actions/queueActions";
import "./Navbar.css";
const Example = (props) => {
  let user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/userdashboard">
          <img className="logonav" src="/imgs/logo.png" alt="loading..."></img>
        </NavbarBrand>
        <Nav className="mr-auto" navbar></Nav>
        <NavLink href={!user.queue_id ? "/scan" : "#"}>
          {!user.queue_id ? (
            <img
              className="barcodeimg"
              src="/imgs/barcode.png"
              alt="barcodeScanner"
            ></img>
          ) : (
            <img
              className="barcodeimg"
              src="/imgs/exit.png"
              alt="exit queue"
              onClick={() => {
                props.socket.emit("personRemoved", { uid: user._id });
                dispatch(removeFromQ(user._id, user.queue_id, history));
              }}
            ></img>
          )}
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Example;
