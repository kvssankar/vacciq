import React, { useEffect } from "react";
import ProfilePage from "../components/Profile/Profile";

import { io as socketIOClient } from "socket.io-client";
import { notifyMe } from "../Util";
import { useDispatch, useSelector } from "react-redux";
import { getq } from "../actions/queueActions";

// eslint-disable-next-line no-undef
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "http://localhost:5000/";

const UserDashboard = () => {
  let user = useSelector((state) => state.userReducer.user);
  let queue = useSelector((state) => state.userReducer.queue);
  const socket = socketIOClient(ENDPOINT);
  const floading = () => {
    if (queue._id)
      socket.emit("joinQ", {
        qid: queue._id,
      });
    socket.on("qdata", (data) => {
      dispatch({ type: "GET_QUEUE", payload: data });
      notifyMe(user, queue);
    });
    socket.on("removedPerson", (data) => {
      notifyMe(user, queue);
      if (data._id === user._id) {
        dispatch({ type: "UPDATE_USER", payload: data });
        dispatch({ type: "GET_QUEUE", payload: null });
        history.push("/userdashboard");
      }
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.queue_id) dispatch(getq(user.queue_id, floading));
    return () => socket.disconnect();
  }, []);
  return <ProfilePage />;
};

export default UserDashboard;
