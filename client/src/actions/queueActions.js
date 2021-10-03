import axios from "axios";
const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
if (token) config.headers["auth-token"] = token;

export const createQ = (name, limit, time, history) => (dispatch) => {
  axios
    .post("/api/q/create", { name, limit, time }, config)
    .then((res) => {
      dispatch({
        type: "UPDATE_USER",
        payload: res.data.user,
      });
      history.push("/userdashboard");
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
    });
};

export const addToQ = (name, phone, qid, history) => (dispatch) => {
  axios
    .post("/api/user/reducedlogin", {
      name: name,
      phone: phone,
      qid,
    })
    .then(async (res) => {
      await dispatch({
        type: "UPDATE_USER",
        payload: res.data.user,
      });
      history.push("/userdashboard");
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
    });
};

export const removeFromQ = (user_id, queue_id, history) => (dispatch) => {
  axios
    .post("/api/q/remove", { user_id, queue_id }, config)
    .then((res) => {
      dispatch({
        type: "GET_QUEUE",
        payload: res.data.queue,
      });
      if (history) {
        dispatch({
          type: "UPDATE_USER",
          payload: res.data.user,
        });
        history.push("/userdashboard");
      }
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
    });
};

export const getq = (qid, floading) => (dispatch) => {
  axios
    .post("/api/q/getq", { queue_id: qid }, config)
    .then((res) => {
      dispatch({ type: "GET_QUEUE", payload: res.data.queue });
      floading();
    })
    .catch((err) => {
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
    });
};
