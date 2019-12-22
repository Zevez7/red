import React from "react";
import { Card, List, Grid, Header, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteApt } from "./../../actions/index";
import StaffEditModal from "./StaffEditModal";
import ApptEditModal from "./../Appt/ApptEditModal";
import selectApptStringToLuxonDT from "../../selectors/selectApptStringToLuxonDT";
import selectApptSortedDateTimeASC from "../../selectors/selectApptSortedDateTimeASC";
import selectApptFutureDatesFromNow from "../../selectors/selectApptFutureDatesFromNow";
import { DateTime } from "luxon";

const StaffDetail = props => {
  const apptMap = props.StaffSelectAppt.map((item, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          {item.date.toLocaleString({ month: "numeric", day: "numeric" })}
        </Table.Cell>
        <Table.Cell>
          {item.time.toLocaleString(DateTime.TIME_SIMPLE)}
        </Table.Cell>
        {/* <Table.Cell>{item.staff} </Table.Cell> */}
        <Table.Cell>{item.service}</Table.Cell>
        <Table.Cell>{item.customer}</Table.Cell>
        <Table.Cell>{item.phone}</Table.Cell>
        <Table.Cell
          textAlign="center"
          icon="delete"
          className="pointer p-0"
          onClick={() => props.deleteAptFx(item.id)}
        />
        <Table.Cell textAlign="center" className="pointer p-0">
          <ApptEditModal itemId={item.id} />
        </Table.Cell>
      </Table.Row>
    );
  });

  const scheduleMap = props.staffSelectDetail.workDay.map(item => (
    <List.Item key={item}>{item}</List.Item>
  ));

  const serviceMap = props.staffSelectDetail.service.map(item => (
    <List.Item key={item}>{item}</List.Item>
  ));

  return (
    <>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h3">{props.staffSelectDetail.staffName}</Header>

            <Card.Description>
              <StaffEditModal />
            </Card.Description>
          </Grid.Column>

          <Grid.Column width={3}>
            <List>
              <List.Item>
                <List.Header>Workday</List.Header>
              </List.Item>
              {scheduleMap}
            </List>
          </Grid.Column>

          <Grid.Column width={5}>
            <List>
              <List.Item>
                <List.Header>Services</List.Header>
              </List.Item>
              {serviceMap}
            </List>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Table celled striped selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  {/* <Table.HeaderCell>Staff</Table.HeaderCell> */}
                  <Table.HeaderCell>Service</Table.HeaderCell>
                  <Table.HeaderCell>Customer</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center" width={1}>
                    Delete
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center" width={1}>
                    Edit
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>{apptMap}</Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateTopProps = state => {
  const selectedStaff = state.staff.staffSelect;
  const stringToLuxonDT = selectApptStringToLuxonDT(state);

  const sortedByDatesASC = selectApptSortedDateTimeASC(stringToLuxonDT);
  const futureDateFromNow = selectApptFutureDatesFromNow(sortedByDatesASC);

  const StaffSelectAppt = () => {
    console.log("getStaffSelectAppt");
    return futureDateFromNow.filter(item => item.staff === selectedStaff);
  };

  //****testing
  console.log("selectedStaff", selectedStaff);
  //****testing
  console.log("futureDateFromNow", futureDateFromNow);
  //****testing
  console.log("StaffSelectAppt", StaffSelectAppt());
  return {
    StaffSelectAppt: StaffSelectAppt(),
    selectedStaff: selectedStaff
  };
};

const mapDispatchToProps = {
  deleteAptFx: deleteApt
};

export default connect(mapStateTopProps, mapDispatchToProps)(StaffDetail);
