import { NAVBAR_SELECT } from "../actions/types";

const INITIAL_STATE = {
  navBarSelect: "dashboard"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVBAR_SELECT:
      return { ...state, navBarSelect: action.payload };

    default:
      return state;
  }
};
