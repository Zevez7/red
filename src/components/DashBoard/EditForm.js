import React, { useState } from "react";
import { Button, Dropdown, Form, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { editApt } from "./../../actions/index";
import DatePickerClass from "../DatePickerClass";
import TimePickerClass from "../TimePickerClass";

const service = [
  {
    key: "full set",
    text: "full set",
    value: "full set"
  },
  {
    key: "pedicure",
    text: "pedicure",
    value: "pedicure"
  },
  {
    key: "manicure",
    text: "manicure",
    value: "manicure"
  },
  {
    key: "pink & white",
    text: "pink & white",
    value: "pink & white"
  },
  {
    key: "waxing",
    text: "waxing",
    value: "waxing"
  },
  {
    key: "nail repair",
    text: "nail repair",
    value: "nail repair"
  }
];

const EditForm = props => {
  const [formData, setFormData] = useState({
    id: props.itemData.id,
    time: props.itemData.time,
    staff: props.itemData.staff,
    service: props.itemData.service,
    customer: props.itemData.customer,
    phone: props.itemData.phone,
    date: props.itemData.date
  });

  const staffOption = props.staff.map(item => {
    return {
      key: item.staffName,
      text: item.staffName,
      value: item.staffName
    };
  });

  //****testing
  console.log("formData", formData);

  const handleSubmit = e => {
    e.preventDefault();
    props.ModalClose();
    props.editAptFx([formData]);
  };

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDatePicker = value => {
    setFormData({
      ...formData,
      date: value
    });
  };

  const handleTimePicker = value => {
    setFormData({
      ...formData,
      time: value
    });
  };

  const handleDropDownDataStaff = result => {
    setFormData({
      ...formData,
      staff: result
    });
  };

  const handleDropDownDataService = result => {
    setFormData({
      ...formData,
      service: result
    });
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Field>
        <label>Customer Name</label>
        <input
          name="customer"
          required
          placeholder="Customer"
          value={formData.customer}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Staff</label>
        <Dropdown
          placeholder="Select Staff"
          fluid
          search
          selection
          value={formData.staff}
          options={staffOption}
          onChange={(e, result) => handleDropDownDataStaff(result.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Service</label>
        <Dropdown
          placeholder="Select Service"
          fluid
          search
          selection
          value={formData.service}
          options={service}
          onChange={(e, result) => handleDropDownDataService(result.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>

        <DatePickerClass
          handleDatePicker={handleDatePicker}
          date={formData.date}
        />
      </Form.Field>
      <Form.Field>
        <label>Time</label>
        <TimePickerClass
          handleTimePicker={handleTimePicker}
          time={formData.time}
        />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input
          placeholder="Phone Number"
          name="phone"
          required
          type="tel"
          value={formData.phone}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Container textAlign="center">
        <Button color="blue" onClick={props.ModalClose}>
          Cancel
        </Button>
        <Button positive type="submit">
          Submit
        </Button>
      </Container>
    </Form>
  );
};

const mapStateTopProps = state => {
  return {
    staff: state.staff.list
  };
};

const mapDispatchToProps = {
  editAptFx: editApt
};

export default connect(mapStateTopProps, mapDispatchToProps)(EditForm);
