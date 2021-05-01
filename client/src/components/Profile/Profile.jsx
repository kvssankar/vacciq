import React from "react";
import "./Profile.css";
import Button from "../CustomButton";
const Profile = () => {
  return (
    <div class="customqueuecontainer">
      <div className="row d-flex ml-3 mt-3 ">
        <img
          src="/imgs/back.png"
          alt="loading..."
          //   onClick={() => history.push("/")}
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>
          Create your own Queue <br></br> INSTANTLY !
        </h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input type="text" className="form-input" placeholder="Name" />
        <input
          type="text"
          className="form-input"
          placeholder="Maximum number of people"
        />
        <input
          type="text"
          className="form-input"
          placeholder="Average time per person"
        />
        {/* <input type="text" className="form-input" placeholder="Password" /> */}
        {/* <input type="checkbox" className="ml-auto form-input" placeholder="Password" /> */}
        <Button
          style={{ margin: "auto", width: "100%", padding: "10px" }}
          className="mt-5 primary-button"
          size="md"
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Profile;
