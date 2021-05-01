import React, { useEffect } from "react";
// import PhoneIcon from "@material-ui/icons/Phone";
// import PersonIcon from "@material-ui/icons/Person";
// import EmailIcon from "@material-ui/icons/Email";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Profile = (props) => {
  let user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  useEffect(() => {
    if (user === null) history.push("/login");
  }, [user, history]);
  return (
    <>
      <p>{user.name}</p>
      <button>create</button>
      <button>join</button>
    </>
  );
};
