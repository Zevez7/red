import { NAVBAR_SELECT } from "../actions/types";

const INITIAL_STATE = {
  navBarSelect: "dashboard"
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case NAVBAR_SELECT:
      return { ...state, navBarSelect: payload };

    default:
      return state;
  }
};
