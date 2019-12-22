import React, { useState } from "react";
import { Button, Checkbox, Form, Container, List } from "semantic-ui-react";
import { connect } from "react-redux";
import { editStaff } from "../../actions/index";
import SelectorServiceStringArray from "./../../selectors/selectServiceStringArray";
import selectStaffSelectDetail from "../../selectors/selectStaffSelectDetail";

const StaffForm = props => {
  const [formData, setFormData] = useState({
    staffName: props.staffSelectDetail.staffName,
    workDay: props.staffSelectDetail.workDay,
    service: props.staffSelectDetail.service,
    staffId: props.staffSelectDetail.staffId
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.ModalClose();
    props.editStaffFx(formData);
  };

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      staffName: e.target.value
    });
  };

  // workday...............
  const workDayChecked = (e, d) => {
    if (d.checked) {
      setFormData({ ...formData, workDay: [...formData.workDay, d.name] });
    } else {
      setFormData({
        ...formData,
        workDay: formData.workDay.filter(item => item !== d.name)
      });
    }
  };

  const WorkDayStringArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const workDayMap = WorkDayStringArray.map(item => {
    if (formData.workDay.includes(item)) {
      return (
        <List.Item key={item}>
          <Checkbox
            name={item}
            label={item}
            onChange={(e, d) => workDayChecked(e, d)}
            defaultChecked
          />
        </List.Item>
      );
    } else {
      return (
        <List.Item key={item}>
          <Checkbox
            name={item}
            label={item}
            onChange={(e, d) => workDayChecked(e, d)}
          />
        </List.Item>
      );
    }
  });

  // services...............
  const serviceChecked = (e, d) => {
    if (d.checked) {
      setFormData({ ...formData, service: [...formData.service, d.name] });
    } else {
      setFormData({
        ...formData,
        service: formData.service.filter(item => item !== d.name)
      });
    }
  };

  const serviceMap = props.ServiceStringArray.map(item => {
    if (formData.service.includes(item)) {
      return (
        <List.Item key={item}>
          <Checkbox
            name={item}
            label={item}
            onChange={(e, d) => serviceChecked(e, d)}
            defaultChecked
          />
        </List.Item>
      );
    } else {
      return (
        <List.Item key={item}>
          <Checkbox
            name={item}
            label={item}
            onChange={(e, d) => serviceChecked(e, d)}
          />
        </List.Item>
      );
    }
  });

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Field>
        <label>Staff Name</label>
        <input
          name="staff"
          required
          placeholder="staff"
          value={formData.staffName}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>

      <Form.Field>
        <label>Work Days</label>
        <List className="columnCSSSpread">{workDayMap}</List>
      </Form.Field>

      <Form.Field>
        <label>Services</label>
        <List className="columnCSSSpread">{serviceMap}</List>
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
    staffSelectDetail: selectStaffSelectDetail(state)[0],
    ServiceStringArray: SelectorServiceStringArray(state)
  };
};

const mapDispatchToProps = { editStaffFx: editStaff };

export default connect(mapStateTopProps, mapDispatchToProps)(StaffForm);
