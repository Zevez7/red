import { ADD_STAFF, STAFF_SELECT, EDIT_STAFF } from "../actions/types";

const initialState = {
  list: [
    {
      staffName: "Kim",
      workDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      service: ["Full Set", "Pedicure"],
      staffId: 1
    },
    {
      staffName: "Tom",
      workDay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      service: ["Full Set", "Pedicure"],
      staffId: 2
    },
    {
      staffName: "James",
      workDay: ["Monday", "Tuesday", "Wednesday", "Friday"],
      service: ["Full Set", "Pedicure"],
      staffId: 3
    },
    {
      staffName: "Grace",
      workDay: ["Monday", "Tuesday", "Wednesday", "Friday"],
      service: ["Full Set", "Pedicure"],
      staffId: 4
    }
  ],

  staffSelect: "Kim"
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case STAFF_SELECT:
      return { ...state, staffSelect: payload };
    case ADD_STAFF:
      const AddArray = [...state.list, payload];
      return { ...state, list: AddArray };
    case EDIT_STAFF:
      const editRemoved = state.list.filter(
        item => item.staffId !== payload.staffId
      );

      const InsertEditedStaff = [...editRemoved, payload];

      return {
        ...state,
        list: InsertEditedStaff,
        staffSelect: payload.staffName
      };
    default:
      return state;
  }
};
