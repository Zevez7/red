import { combineReducers } from "redux";
import navReducer from "./navReducer";
import apptReducer from "./apptReducer";
import staffReducer from "./staffReducer";
import serviceReducer from "./serviceReducer";
import dashReducer from "./dashReducer";
import userReducer from "./userReducer";

export default combineReducers({
  nav: navReducer,
  appt: apptReducer,
  staff: staffReducer,
  service: serviceReducer,
  dash: dashReducer,
  user: userReducer
});
