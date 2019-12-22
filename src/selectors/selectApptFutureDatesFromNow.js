import { createSelector } from "reselect";
import { DateTime } from "luxon";

const todayDate = DateTime.local();
const sortedData = state => state;

const getFutureDateFromNow = sortedData =>
  sortedData.filter(item => {
    //****testing
    console.log("futuredates");
    return item.date > todayDate || item.date.hasSame(todayDate, "day");
  });

export default createSelector(sortedData, getFutureDateFromNow);
