import userReducer from "./userReducer";

import { combineReducers } from "redux";

const allReducer = combineReducers({
  userReducer: userReducer,
});

export default allReducer;
