import React from "react";
import "./Admin.css";

const Admin = () => {
    return (
      <div className="signuppagecontainer container">
        <div className="row d-flex ml-3 mt-3 ">
          <img src="/imgs/back.png" alt="loading..."></img>
        </div>
        <div className="mt-5 row justify-content-center d-flex">
           <img src="/imgs/barcodeexample.png" alt="loading..."></img>
        </div>
        <div className="d-flex justify-content-between row">
            <div className="rectanglebackground2 flex-fill mt-5 p-2 col-example ">
                <div className="flexdirection" style={{alignItems:"center"}}>
                <div className="fontstyle1small textcenter p-2 col-example ">Queue count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">00:00:00</div>
                </div>
            </div>
            <div className="rectanglebackground2_1 flex-fill mt-5 p-2 col-example justify-content-center align-items-center">
                <div className="flexdirection">
                <div className="fontstyle1small textcenter p-2 col-example ">Queue count</div>
                <div className="fontstyle1small textcenter p-2 col-example ">00:00:00</div>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
export default Admin;