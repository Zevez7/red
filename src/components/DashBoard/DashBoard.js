import React from "react";
import { Container, Grid, Item } from "semantic-ui-react";
import DashList from "./DashList";
import { connect } from "react-redux";
import { DateTime, Interval } from "luxon";
import { viewDash } from "./../../actions/index";
import selectApptStringToLuxonDT from "../../selectors/selectApptStringToLuxonDT";
import selectApptSortedDateTimeASC from "../../selectors/selectApptSortedDateTimeASC";
import selectApptFutureDatesFromNow from "../../selectors/selectApptFutureDatesFromNow";

const dashBoard = {
  HeaderLink: {
    margin: "1rem",
    backgroundColor: "whitesmoke"
  },
  Content: {
    margin: "1rem"
  },
  Header: {
    marginBottom: 0
  }
};

const DashBoard = props => {
  let renderComponent;

  let switchKey = props.dashView;

  switch (switchKey) {
    case "today":
      renderComponent = (
        <DashList
          sortedByDates={props.apptTodayOnly}
          titleDates={props.todayDTString}
          title="Today: "
        />
      );
      break;
    case "tomorrow":
      renderComponent = (
        <DashList
          sortedByDates={props.apptTomorrowOnly}
          titleDates={props.tomorrowDTString}
          title="Tomorrow: "
        />
      );

      break;
    case "week":
      renderComponent = (
        <DashList
          sortedByDates={props.apptWeekOnly}
          titleDates={`${props.todayDTString} -  ${props.weekDTString}`}
          title="Week: "
        />
      );

      break;
    case "month":
      renderComponent = (
        <DashList
          sortedByDates={props.apptMonthOnly}
          titleDates={`${props.todayDTString}  -  ${props.monthDTString}`}
          title="Month: "
        />
      );

      break;
    default:
      renderComponent = (
        <DashList sortedByDates={props.sortedByDatesASC} title="ALL" />
      );
      break;
  }

  return (
    <>
      <Grid stackable columns={12} divided>
        <Grid.Row style={dashBoard.HeaderLink}>
          <Grid.Column textAlign="center" width={3}>
            <Item.Content>
              <Item.Header
                as="h1"
                style={dashBoard.Header}
                onClick={() => props.viewDashFx("today")}
                className="hover"
              >
                Today
              </Item.Header>
            </Item.Content>
          </Grid.Column>
          <Grid.Column textAlign="center" width={4}>
            <Item.Content>
              <Item.Header
                as="h1"
                style={dashBoard.Header}
                onClick={() => props.viewDashFx("tomorrow")}
                className="hover"
              >
                Tomorrow
              </Item.Header>
            </Item.Content>
          </Grid.Column>
          <Grid.Column textAlign="center" width={4}>
            <Item.Content>
              <Item.Header
                as="h1"
                style={dashBoard.Header}
                onClick={() => props.viewDashFx("week")}
                className="hover"
              >
                Week
              </Item.Header>
            </Item.Content>
          </Grid.Column>
          <Grid.Column textAlign="center" width={4}>
            <Item.Content>
              <Item.Header
                as="h1"
                style={dashBoard.Header}
                onClick={() => props.viewDashFx("month")}
                className="hover"
              >
                Month
              </Item.Header>
            </Item.Content>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={dashBoard.Content}>
          <Container basic="true">{renderComponent}</Container>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  const todayDate = DateTime.local();

  const stringToLuxonDT = selectApptStringToLuxonDT(state);

  const sortedByDatesASC = selectApptSortedDateTimeASC(stringToLuxonDT);
  const futureDateFromNow = selectApptFutureDatesFromNow(sortedByDatesASC);
  //****testing
  console.log("futureDateFromNow", futureDateFromNow);
  //////////////////// select date specific data

  const todayDT = DateTime.local();
  const apptTodayOnly = sortedByDatesASC.filter(item => {
    return item.date.hasSame(todayDate, "day");
  });

  const tomorrowDT = todayDate.plus({ days: 1 });

  const apptTomorrowOnly = sortedByDatesASC.filter(item => {
    return item.date.hasSame(tomorrowDT, "day");
  });

  const weekDT = todayDate.plus({ weeks: 1 });
  const apptWeekOnly = sortedByDatesASC.filter(item => {
    return Interval.fromDateTimes(todayDate, weekDT).contains(item.date);
  });

  const monthDT = todayDate.plus({ months: 1 });
  const apptMonthOnly = sortedByDatesASC.filter(item => {
    return Interval.fromDateTimes(todayDate, monthDT).contains(item.date);
  });

  const dTToLocalString = DT =>
    DT.toLocaleString({
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  //****testing
  console.log("apptMonthOnly", apptMonthOnly);

  return {
    futureDateFromNow,
    sortedByDatesASC,
    dashView: state.dash.view,
    todayDTString: dTToLocalString(todayDT),
    apptTodayOnly,
    apptTomorrowOnly,
    tomorrowDTString: dTToLocalString(tomorrowDT),
    apptWeekOnly,
    weekDTString: dTToLocalString(weekDT),
    apptMonthOnly,
    monthDTString: dTToLocalString(monthDT)
  };
};

const mapDispatchToProps = { viewDashFx: viewDash };

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
