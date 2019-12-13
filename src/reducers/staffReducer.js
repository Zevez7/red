import { STAFF_DATA, ADD_STAFF } from "../actions/types";
// import Faker from "faker";
import { STAFF_SELECT } from "./../actions/types";

// const user = {
//   firstName: Faker.name.firstName()
// };

const initialState = {
  list: [
    {
      staffName: "Kim",
      workDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      service: ["Nail"]
    },
    {
      staffName: "Tom",
      workDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      service: ["Nail"]
    },
    {
      staffName: "James",
      workDay: ["Monday", "Tuesday", "Wednesday", "Friday"],
      service: ["Nail"]
    },
    {
      staffName: "Grace",
      workDay: ["Monday", "Tuesday", "Wednesday", "Friday"],
      service: ["Nail"]
    }
  ],

  staffSelect: "Kim"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STAFF_DATA:
      return state;
    case STAFF_SELECT:
      return { ...state, staffSelect: action.payload };
    case ADD_STAFF:
      const AddArray = [...state.list, action.payload];
      return { ...state, list: AddArray };
    default:
      return state;
  }
};
