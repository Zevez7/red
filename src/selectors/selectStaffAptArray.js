import { createSelector } from "reselect";

const selectedStaff = state => state.staff.staffSelect;

const getStaffSelectAppt = (selectedStaff, futureDateFromNow) => {
  console.log("getStaffSelectAppt");
  return futureDateFromNow.filter(item => item.staff === selectedStaff);
};

export default createSelector(
  selectedStaff,
  futureDateFromNow,
  getStaffSelectAppt
);
