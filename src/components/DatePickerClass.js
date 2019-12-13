import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";

export default class DatePickerClass extends Component {
  handleChange = (event, { value }) => {
    this.props.handleDatePicker(value);
  };

  render() {
    return (
      <DateInput
        dateFormat="MM-DD-YY"
        name="date"
        placeholder="Date"
        value={this.props.date}
        iconPosition="left"
        popupPosition="bottom right"
        onChange={this.handleChange}
      />
    );
  }
}
