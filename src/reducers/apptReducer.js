import { DELETE_APT, SUBMIT_APT, EDIT_APT } from "../actions/types";

const initialState = [
  {
    id: 1,
    time: "02:30 PM",
    staff: "Tom",
    service: "gel refill",
    customer: "10",
    phone: "813-817-4375",
    date: "12-19-2019"
  },
  {
    id: 2,
    time: "03:30 PM",
    staff: "Kim",
    service: "Pedicure",
    customer: "15",
    phone: "813-817-4375",
    date: "12-22-2019"
  },
  {
    id: 3,
    time: "01:30 PM",
    staff: "James",
    service: "Full Set",
    customer: "20",
    phone: "813-817-4375",
    date: "12-19-2019"
  },
  {
    id: 4,
    time: "02:30 PM",
    staff: "Tom",
    service: "Full Set",
    customer: "25",
    phone: "813-817-4375",
    date: "12-30-2019"
  },
  {
    id: 5,
    time: "06:30 PM",
    staff: "James",
    service: "Full Set",
    customer: "30",
    phone: "813-817-4375",
    date: "12-25-2019"
  },
  {
    id: 6,
    time: "02:30 PM",
    staff: "Tom",
    service: "gel refill",
    customer: "10",
    phone: "813-817-4375",
    date: "12-19-2019"
  },
  {
    id: 7,
    time: "12:30 PM",
    staff: "Kim",
    service: "Pedicure",
    customer: "15",
    phone: "813-817-4375",
    date: "01-02-2019"
  },
  {
    id: 8,
    time: "08:30 PM",
    staff: "James",
    service: "Full Set",
    customer: "20",
    phone: "813-817-4375",
    date: "01-19-2019"
  },
  {
    id: 9,
    time: "06:30 PM",
    staff: "James",
    service: "Full Set",
    customer: "25",
    phone: "813-817-4375",
    date: "12-27-2019"
  },
  {
    id: 10,
    time: "03:30 PM",
    staff: "Grace",
    service: "Full Set",
    customer: "30",
    phone: "813-817-4375",
    date: "12-31-2019"
  }
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_APT:
      return state.filter(item => item.id !== payload);
    case SUBMIT_APT:
      return [...state, ...payload];
    case EDIT_APT:
      const editRemoved = state.filter(item => item.id !== payload.id);
      return [...editRemoved, payload];
    default:
      return state;
  }
};
