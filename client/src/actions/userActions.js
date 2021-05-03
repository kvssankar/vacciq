import axios from "axios";

export const register = (name, email, phone, password, sex, history) => (
  dispatch
) => {
  console.log("working");
  axios
    .post("/api/user/register", { name, email, phone, password, sex })
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      history.push("/userdashboard");
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

export const login = (phone, password, history) => (dispatch) => {
  console.log("working");
  axios
    .post("/api/user/login", { phone, password })
    .then((res) => {
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      history.push("/userdashboard");
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
