import axios from "axios";

export const register =
  (name, email, phone, password, sex, next = null) =>
  (dispatch) => {
    axios
      .post("/api/user/register", { name, email, phone, password, sex })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        if (next) next();
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err.response.data,
        });
        if (next) next();
      });
  };

export const login =
  (phone, password, next = null) =>
  (dispatch) => {
    axios
      .post("/api/user/login", { phone, password })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        if (next) next();
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          payload: err.response.data,
        });
        if (next) next();
      });
  };
