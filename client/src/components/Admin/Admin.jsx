import React from "react";
import QRCode from "qrcode.react";
import "./Admin.css";
import { useHistory } from "react-router";

const Admin = ({user}) => {
  const history=useHistory();
    return (
      <div className="signuppagecontainer container">
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" onClick={()=>history.push("/userdashboard")} alt="loading..."></img>
        </div>
        <div className="mt-5 row justify-content-center d-flex">
        <QRCode value={user.center_id._id}/>
        </div>
        <div className="d-flex justify-content-between row">
            <div className="rectanglebackground2 flex-fill mt-5 p-2 col-example ">
                <div className="flexdirection" style={{alignItems:"center"}}>
                <div className="fontstyle1small textcenter p-2 col-example ">Total count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">{user.center_id.line.length}</div>
                </div>
            </div>
            <div className="rectanglebackground2_1 flex-fill mt-5 p-2 col-example justify-content-center align-items-center">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Exceeded count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">{user.center_id.line.length-user.center_id.limit>0 ? user.center_id.line.length-user.center_id.limit : 0}</div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
export default Admin;