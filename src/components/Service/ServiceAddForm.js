import React, { useState } from "react";
import { Button, Form, Container, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { addService } from "../../actions/index";

const ServiceAddForm = props => {
  const [formData, setFormData] = useState({
    serviceName: "",
    categoryName: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.ModalClose();
    props.addServiceFx(formData);
  };

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      serviceName: e.target.value
    });
  };

  const handleDropDownDataService = result => {
    setFormData({
      ...formData,
      categoryName: result
    });
  };

  const categoryOption = Object.keys(props.service).map(item => {

    return {
      key: item,
      text: item,
      value: item
    };
  });

  //****testing
  console.log("formData", formData);

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Field>
        <label>Service Name</label>
        <input
          name="serviceName"
          required
          placeholder="service name"
          value={formData.serviceName}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Category</label>
        <Dropdown
          placeholder="Select Category"
          fluid
          search
          selection
          value={formData.staff}
          options={categoryOption}
          onChange={(e, result) => handleDropDownDataService(result.value)}
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
  //****testing
  console.log("state.service", state.service);
  return {
    service: state.service
  };
};

const mapDispatchToProps = {
  addServiceFx: addService
};

export default connect(mapStateTopProps, mapDispatchToProps)(ServiceAddForm);
