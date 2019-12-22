import { createSelector } from "reselect";

const staffSelectValue = state => state.staff.staffSelect;
const staffListValue = state => state.staff.list;

const getStaffSelectDetail = (staffListValue, staffSelectValue) => {
  return staffListValue.filter(item => {
    return item.staffName === staffSelectValue;
  });
};

export default createSelector(
  staffListValue,
  staffSelectValue,
  getStaffSelectDetail
);
