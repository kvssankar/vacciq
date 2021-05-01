import axios from "axios";
const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-type": "application/json",
  },
};
if (token) config.headers["auth-token"] = token;

export const createQ = (name, limit, time) => (dispatch) => {
  axios
    .post("/api/q/create", { name, limit, time }, config)
    .then((res) => {
      dispatch({
        type: "UPDATE_USER",
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_ERROR" });
      }, [5000]);
    });
};

export const addToQ = (center_id) => (dispatch) => {
  axios
    .post("/api/q/add", { center_id }, config)
    .then((res) => {
      dispatch({
        type: "UPDATE_USER",
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_ERROR" });
      }, [5000]);
    });
};

export const removeFromQ = (user_id, queue_id) => (dispatch) => {
  axios
    .post("/api/q/add", { user_id, queue_id }, config)
    .then((res) => {
      dispatch({
        type: "UPDATE_USER",
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: "ERROR",
        payload: err.response.data,
      });
      setTimeout(() => {
        dispatch({ type: "CLEAR_ERROR" });
      }, [5000]);
    });
};
