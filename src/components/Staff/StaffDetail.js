import React from "react";
import { Card, List, Grid, Header, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteApt } from "./../../actions/index";
import EditModal from "./../DashBoard/EditModal";

const StaffDetail = props => {
  const dashMap = props.staffSelectedSchedule.map((item, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>{item.date}</Table.Cell>
        <Table.Cell>{item.time}</Table.Cell>
        <Table.Cell>{item.staff} </Table.Cell>
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
          <EditModal itemData={item} />
        </Table.Cell>
      </Table.Row>
    );
  });

  //****testing
  console.log("props", props.staffSelectDetail);

  const scheduleMap = props.staffSelectDetail.workDay.map(item => (
    <List.Item key={item}>{item}</List.Item>
  ));

  //****testing
  console.log("props.staffSelectedSchedule", props.staffSelectedSchedule);
  return (
    <>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h3">{props.staffSelectDetail.staffName}</Header>

            <Card.Description>Started Aug 2016 </Card.Description>
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
              <List.Item>Pedicure</List.Item>
              <List.Item>Manicure</List.Item>
              <List.Item>Full Set</List.Item>
              <List.Item>Pink & White</List.Item>
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
                  <Table.HeaderCell>Staff</Table.HeaderCell>
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

              <Table.Body>{dashMap}</Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateTopProps = state => {
  //****testing
  console.log("state", state);
  const selectedStaff = state.staff.staffSelect;
  //****testing
  console.log("selectedStaff", selectedStaff);
  //****testing
  console.log("state.dash", state.dash);
  return {
    staffSelectedSchedule: state.dash.filter(
      item => item.staff === selectedStaff
    ),
    selectedStaff: state.staff.staffSelect
  };
};

const mapDispatchToProps = {
  deleteAptFx: deleteApt
};

export default connect(mapStateTopProps, mapDispatchToProps)(StaffDetail);
