import { combineReducers } from "redux";
import navReducer from "./navReducer";
import dashBoard from "./dashReducer";
import staffReducer from "./staffReducer";

export default combineReducers({
  nav: navReducer,
  dash: dashBoard,
  staff: staffReducer
});
