import React, { useEffect } from "react";
import { UncontrolledAlert } from "reactstrap";
import { useSelector } from "react-redux";
function CustomAlert() {
  let error = useSelector((state) => state.userReducer.err);
  let mssg = useSelector((state) => state.userReducer.mssg);
  useEffect(() => {
    console.log(error, mssg);
  }, []);
  return (
    <UncontrolledAlert
      style={{ display: error === -1 ? "none" : "block" }}
      color={error === 0 ? "success" : "danger"}
    >
      {mssg === null || mssg === "" ? "Something went wrong" : mssg}
    </UncontrolledAlert>
  );
}

export default CustomAlert;
