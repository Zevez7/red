import { VIEW_DASH } from "../actions/types";

const initialState = {
  view: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_DASH:
      return { ...state, view: payload };
    default:
      return state;
  }
};
