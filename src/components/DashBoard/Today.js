import React from "react";
import { Header, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteApt } from "../../actions/index";
import EditModal from "./EditModal";

const Today = props => {
  const dashMap = props.dash.map((item, index) => {
    return (
      <Table.Row key={index}>
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
  console.log("props.dash", props.dash);
  return (
    <>
      <Header as="h3">Today - Friday, Dec 25th</Header>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
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
    </>
  );
};

const mapStateTopProps = state => {
  //****testing
  console.log("state", state);
  return {
    dash: state.dash
  };
};

const mapDispatchToProps = {
  deleteAptFx: deleteApt
};

export default connect(mapStateTopProps, mapDispatchToProps)(Today);
