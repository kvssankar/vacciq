import React, { useEffect } from "react";
import { Alert } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
function CustomAlert() {
  let error = useSelector((state) => state.userReducer.err);
  let mssg = useSelector((state) => state.userReducer.mssg);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ERROR" });
    }, [5000]);
  }, [error, mssg, dispatch]);
  return (
    <Alert
      style={{ display: error === -1 ? "none" : "block" }}
      color={error === 0 ? "success" : "danger"}
    >
      {mssg === null || mssg === "" ? "Something went wrong" : mssg}
    </Alert>
  );
}

export default CustomAlert;
