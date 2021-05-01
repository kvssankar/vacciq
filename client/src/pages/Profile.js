import React from "react";
import { useSelector } from "react-redux";

export const Profile = (props) => {
  let user = useSelector((state) => state.userReducer.user);
  return (
    <>
      <p>{user.name}</p>
      <button>create</button>
      <button>join</button>
    </>
  );
};
