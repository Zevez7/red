import React, { useState } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { editUser } from "../../actions/index";

const SettingEditForm = props => {
  const [formData, setFormData] = useState({
    id: 1,
    firstName: props.userData.firstName,
    lastName: props.userData.lastName,
    email: props.userData.email,
    address: props.userData.address,
    description: props.userData.description
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.ModalClose();
    props.editUserFx(formData);
  };

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //****testing
  console.log("userData", props.userData);
  console.log("formData", formData);
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Field>
        <label>First Name</label>
        <input
          name="firstName"
          required
          placeholder="First Name"
          value={formData.firstName}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lastName"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>

      <Form.Field>
        <label>Address</label>
        <input
          name="address"
          required
          placeholder="Address"
          value={formData.address}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>

      <Form.Field>
        <label>Description</label>

        <textarea
          name="description"
          required
          placeholder="Description"
          value={formData.description}
          onChange={e => handleFormInputData(e)}
          rows={3}
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

const mapStateTopProps = (state, ownProps) => {
  return {
    // itemData: itemData[0],
    // staff: state.staff.list,
    // ServiceStringArray: selectorServiceStringArray(state)
  };
};

const mapDispatchToProps = {
  editUserFx: editUser
};

export default connect(mapStateTopProps, mapDispatchToProps)(SettingEditForm);
