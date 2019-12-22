import { EDIT_USER } from "../actions/types";

const initialState = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "JohnSmith@gmail.com",
    role: "Admin",
    joinDate: "12-12-2019",
    address: "2492 Barnes Avenue Blue Ash, Ohio 45242",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus! Sint quo tempore est laborum sequi, deleniti eius error harum illum, provident temporibus dignissimos doloribus explicabo excepturi odio, nam accusamus?",
    emailSub: true,
    textNot: true,
    visibility: true,
    autoSave: true,
    autoReply: true,
    vacation: true
  }
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_USER:
      const editRemoved = state.filter(item => item.id !== payload.id);
      return [...editRemoved, payload];
    default:
      return state;
  }
};
