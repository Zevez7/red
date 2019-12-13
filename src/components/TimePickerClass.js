import React, { Component } from "react";
import { TimeInput } from "semantic-ui-calendar-react";

export default class TimePickerClass extends Component {
  handleChange = (event, { value }) => {
    this.props.handleTimePicker(value);
  };

  render() {
    return (
      <TimeInput
        timeFormat="ampm"
        name="time"
        placeholder="Time"
        value={this.props.time}
        iconPosition="left"
        popupPosition="bottom right"
        onChange={this.handleChange}
      />
    );
  }
}
