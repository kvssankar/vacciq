import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQ } from "../actions/queueActions";
import "../css/component.css";
import QRCode from "qrcode.react";
// import ProfilePage from "../components/Profile/Profile";

const Profile = () => {
  const dispatch = useDispatch();
  const [qr, setQr] = useState(null);
  let user = useSelector((state) => state.userReducer.user);
  const createq = async () => {
    await dispatch(createQ("sankar", 5, 5));
    if (user.center_id) setQr(user.center_id._id);
  };
  return (
    <div>
      <button onClick={createq}>create</button>
      <button>join</button>
      {qr && <QRCode value={qr} />}
    </div>
  );
};

export default Profile;
