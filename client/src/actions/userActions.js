import axios from "axios";

export const register = (name, email, phone, password, sex) => (dispatch) => {
  console.log("working");
  axios
    .post("/api/user/register", { name, email, phone, password, sex })
    .then((res) =>
      dispatch({
        type: "LOGIN",
        payload: res.data,
      })
    )
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
