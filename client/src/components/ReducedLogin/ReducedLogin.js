import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToQ } from "../../actions/queueActions";
const ReducedLogin = ({ qid }) => {
  const [q, setQ] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    async function aq() {
      if (isLogin) {
        setName(user.name);
        setPhone(user.phone);
        await dispatch(addToQ(qid));
        //history.push("/dashboard");
      }
    }
    aq();
    if (!isLogin)
      axios.post("/api/q/details", { qid, sankar: "sasa" }).then((res) => {
        console.log(res.data.q);
        setQ(res.data.q);
        history.push("/dashboard");
      });
  }, [qid]);
  const history = useHistory();
  const send = () => {
    axios
      .post("/api/user/reducedlogin", { qid, name, phone })
      .then(async (res) => {
        await dispatch({ type: "UPDATE_USER", payload: res.data.user });
        history.push("/dashboard");
      });
  };
  return (
    <div class="customqueuecontainer">
      <div className="row d-flex ml-3 mt-3 ">
        <img
          src="/imgs/back.png"
          alt="loading..."
          onClick={() => history.goBack()}
        ></img>
      </div>
      <div className="row d-flex ml-4 mt-3 ">
        <h5>
          Join this {q ? q.name : "loading..."} now<br></br> Enter the following
          details !
        </h5>
      </div>
      <div className="mt-3 ml-4 mr-4 signupform">
        <input
          type="text"
          value={name}
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="form-input"
          placeholder="Phone number"
        />

        {/* <input type="text" className="form-input" placeholder="Password" /> */}
        {/* <input type="checkbox" className="ml-auto form-input" placeholder="Password" /> */}
        <button
          style={{ margin: "auto", width: "100%", padding: "10px" }}
          className="mt-5 primary-button"
          onClick={send}
          size="md"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ReducedLogin;
