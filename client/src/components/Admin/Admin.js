import React from "react";
import QRCode from "qrcode.react";
import domtoimage from "dom-to-image";
import "./Admin.css";
import { useHistory } from "react-router";

import PropTypes from "prop-types";

function Admin({ center }) {
  const history = useHistory();
  const share = () => {
    domtoimage.toBlob(document.querySelector("canvas")).then(function (blob) {
      const file = new File([blob], "vacciq.png", blob);
      if (navigator.share) {
        navigator.share({
          files: [file],
          title: `Join the ${center.name} using LineItOut`,
          text: "Scan the qr code to join the queue or follow the link bellow",
          url: `https://lineitout.herokuapp.com/quicklogin/${center._id}`,
        });
      } else {
        alert("this feature is only compactable with mobiles");
      }
    });
  };
  return (
    <div className="mb-1 container">
      <div className="row d-flex ml-3 mt-3 ">
        <img
          src="/imgs/back.png"
          onClick={() => history.push("/userdashboard")}
          alt="loading..."
        ></img>
      </div>
      <div
        className="mt-2 row justify-content-center d-flex"
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <QRCode
            value={"https://lineitout.herokuapp.com/quicklogin/" + center._id}
          />
          <img
            className="border1"
            src="/imgs/border.svg"
            alt="loading..."
          ></img>
          <img
            className="border2"
            src="/imgs/border.svg"
            alt="loading..."
          ></img>
          <img
            className="border3"
            src="/imgs/border.svg"
            alt="loading..."
          ></img>
          <img
            className="border4"
            src="/imgs/border.svg"
            alt="loading..."
          ></img>
        </div>

        <button
          style={{ padding: "5px 10px" }}
          onClick={share}
          className="primary-button"
        >
          Share ↱
        </button>
      </div>
      <h3 className="text-center">{center.name}</h3>
      <div className="mt-4 queuedetailsconatiner">
        <div className="d-flex justify-content-between row">
          <div className="rectanglebackground2 flex-fill p-2 col-example ">
            <div className="flexdirection" style={{ alignItems: "center" }}>
              <div className="fontstyle1small textcenter p-2 col-example ">
                Queue Count
              </div>
              <div className="fontstyle1small textcenter p-2 col-example ">
                0
              </div>
            </div>
          </div>
          <div className="rectanglebackground2 flex-fill p-2 col-example ">
            <div className="flexdirection" style={{ alignItems: "center" }}>
              <div className="fontstyle1small textcenter p-2 col-example ">
                Queue Time
              </div>
              <div className="fontstyle1small textcenter p-2 col-example ">
                00:00:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Admin.propTypes = {
  center: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Admin;
