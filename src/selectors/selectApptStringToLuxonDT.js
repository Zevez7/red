import { createSelector } from "reselect";
import { DateTime } from "luxon";

const apptState = state => state.appt;

const getApptStringToLuxonDT = apptState => {
  return apptState.map(item => {
    const dateDT = DateTime.fromFormat(item.date, "MM-dd-yyyy");
    const timeDT = DateTime.fromFormat(item.time, "t");
    const DT = DateTime.fromFormat(
      `${item.date} ${item.time}`,
      "MM-dd-yyyy t"
    ).toISO();
    return {
      ...item,
      date: dateDT,
      time: timeDT,
      dateTime: DT
    };
  });
};

export default createSelector(apptState, getApptStringToLuxonDT);
