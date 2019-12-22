import { createSelector } from "reselect";

const sortData = state => state;

const getSortedByDateTimeASC = state =>
  [...state].sort((a, b) => {
    let aDate = new Date(a.dateTime);
    let bDate = new Date(b.dateTime);
    return aDate - bDate;
  });

export default createSelector(sortData, getSortedByDateTimeASC);
