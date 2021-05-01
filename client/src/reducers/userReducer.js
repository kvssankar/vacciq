const initialState = {
  user: null,
  err: -1,
  mssg: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        err: 0,
        mssg: "Successfully logged in !",
      };
    case "ERROR":
      console.log(action.payload);
      return {
        ...state,
        err: 1,
        mssg: action.payload.mssg || "Something went wrong",
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        err: -1,
        mssg: null,
      };
    case "LOGOUT":
      localStorage.clear("state");
      localStorage.removeItem("token");
      return {
        isMemAuth: false,
      };
    default:
      return state;
  }
};

export default userReducer;
