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
      history.push("/admin");
    })
    .catch((err) => {
      console.log(err);
      // err.response.data = "Sasas";
      // dispatch({
      //   type: "ERROR",
      //   payload: err.response.data,
      // });
      // setTimeout(() => {
      //   dispatch({ type: "CLEAR_ERROR" });
      // }, [5000]);
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
      history.push("/dashboard");
    });
};

export const removeFromQ = (user_id, queue_id) => (dispatch) => {
  axios
    .post("/api/q/remove", { user_id, queue_id }, config)
    .then((res) => {
      dispatch({
        type: "GET_QUEUE",
        payload: res.data.queue,
      });
    })
    .catch((err) => {
      // console.log(err.response.data);
      // dispatch({
      //   type: "ERROR",
      //   payload: err.response.data,
      // });
      setTimeout(() => {
        dispatch({ type: "CLEAR_ERROR" });
      }, [5000]);
    });
};

export const getq = (qid, floading) => (dispatch) => {
  axios.post("/api/q/getq", { queue_id: qid }, config).then((res) => {
    dispatch({ type: "GET_QUEUE", payload: res.data.queue });
    floading();
  });
};

export const exitq = (qid, history) => (dispatch) => {
  axios.post("/api/q/exitq", { queue_id: qid }, config).then((res) => {
    dispatch({ type: "GET_QUEUE", payload: null });
    history.push("/userdashboard");
  });
};
