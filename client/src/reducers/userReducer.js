const initialState = {
  user: null,
  err: -1,
  isLogin: 0,
  mssg: null,
  queue: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        isLogin: 1,
        user: action.payload.user,
        err: 0,
        mssg: "Successfully logged in !",
      };
    case "GET_QUEUE":
      //Object.assign(state.queue, action.payload);
      return {
        ...state,
        queue: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        isLogin: 1,
        user: action.payload,
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
        user: null,
        err: -1,
        isLogin: 0,
        mssg: null,
        queue: null,
      };
    default:
      return state;
  }
};

export default userReducer;
