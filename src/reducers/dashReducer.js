import {
  DASHBOARD_DATA,
  DELETE_APT,
  SUBMIT_APT,
  EDIT_APT
} from "../actions/types";

const initialState = [
  {
    id: 1,
    time: "2:30",
    staff: "Tom",
    service: "full set",
    customer: "Janice",
    phone: "813-817-4375",
    date: "12/12/2019"
  },
  {
    id: 2,
    time: "2:30",
    staff: "Kim",
    service: "pedicure",
    customer: "Janice",
    phone: "813-817-4375",
    date: "12/12/2019"
  },
  {
    id: 3,
    time: "2:30",
    staff: "James",
    service: "full set",
    customer: "Janice",
    phone: "813-817-4375",
    date: "12/12/2019"
  }
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DASHBOARD_DATA:
      return [...state, ...payload];
    case DELETE_APT:
      return state.filter(item => item.id !== payload);
    case SUBMIT_APT:
      return [...state, ...payload];
    case EDIT_APT:
      const editRemoved = state.filter(item => item.id !== payload[0].id);
      return [...editRemoved, ...payload];

    default:
      return state;
  }
};
