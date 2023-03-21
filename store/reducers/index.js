import { combineReducers } from "redux";
import getTokenReducer from "./getTokenReducer";

const rootReducer = combineReducers({
  getTokenReducer: getTokenReducer,
});

export default rootReducer;
