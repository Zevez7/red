import { ADD_SERVICE } from "../actions/types";

const initialState = {
  category1: ["Manicure", "Pedicure"],
  category2: ["Full Set", "refill", "gel full set", "gel refill"],
  category3: ["pink & white", "waxing"]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SERVICE:
      const itemArrayAdd = [
        ...state[payload.categoryName],
        payload.serviceName
      ];
      return { ...state, [payload.categoryName]: itemArrayAdd };
    default:
      return state;
  }
};
