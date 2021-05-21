import React from "react";
import QRCode from "qrcode.react";
import domtoimage from "dom-to-image";
import "./Admin.css";
import { useHistory } from "react-router";

const Admin = ({user,center}) => {
  const history=useHistory();
  const share = () => {
    domtoimage.toBlob(document.querySelector("canvas")).then(function (blob) {
      const file = new File([blob], "vacciq.png", blob);
      if (navigator.share) {
        navigator.share({
          files: [file],
          title: `Join the ${center.name} using VacciQ`,
          text:
            "Scan the qr code to join the queue or follow the link bellow",
          url: `https://vacciq.herokuapp.com/quicklogin/${center._id}`,
        });
      } else {
        alert("this feature is only compactable with mobiles");
      }
    });
  };
    return (
      <div className="signuppagecontainer container">
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" onClick={()=>history.push("/userdashboard")} alt="loading..."></img>
        </div>
        <div className="mt-2 row justify-content-center d-flex" style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <QRCode value={center._id}/>
        <button style={{padding:"5px 10px"}} onClick={share} className="primary-button">Share ↱</button>
        </div>
        <div className="d-flex justify-content-between row">
            <div className="rectanglebackground2 flex-fill mt-5 p-2 col-example ">
                <div className="flexdirection" style={{alignItems:"center"}}>
                <div className="fontstyle1small textcenter p-2 col-example ">Total count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">{center.line.length}</div>
                </div>
            </div>
            <div className="rectanglebackground2_1 flex-fill mt-5 p-2 col-example justify-content-center align-items-center">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Exceeded count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">{center.line.length-center.limit>0 ? center.line.length-center.limit : 0}</div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
export default Admin;