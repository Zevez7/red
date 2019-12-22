import React from "react";
import { Header, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteApt } from "../../actions/index";
import ApptEditModal from "../Appt/ApptEditModal";
import { DateTime } from "luxon";

const Today = props => {
  const apptMap = props.sortedByDates.map((item, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          {item.date.toLocaleString({ month: "numeric", day: "numeric" })}
        </Table.Cell>
        <Table.Cell>
          {item.time.toLocaleString(DateTime.TIME_SIMPLE)}
        </Table.Cell>
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
          <ApptEditModal itemId={item.id} />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <Header as="h3">
        {props.title}
        {props.titleDates}
      </Header>
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

        <Table.Body>{apptMap}</Table.Body>
      </Table>
    </>
  );
};

const mapStateToProps = state => {
  return {
    // appt: state.appt
  };
};

const mapDispatchToProps = {
  deleteAptFx: deleteApt
};

export default connect(mapStateToProps, mapDispatchToProps)(Today);
