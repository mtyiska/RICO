import React, { Component } from "react";
import "../DraggableForm/draggable.css";
export default class RegularDate extends Component {
  render() {
    return (
      <div
        className="input-group date"
        id="reservationdate"
        data-target-input="nearest"
      >
        <input
          type="text"
          className="form-control datetimepicker-input"
          data-target="#reservationdate"
          placeholder={this.props.cLabel}
        />
        <div
          className="input-group-append"
          data-target="#reservationdate"
          data-toggle="datetimepicker"
        >
          <div id={this.props.id} className="input-group-text">
            <i className="fa fa-calendar" />
          </div>
        </div>
      </div>
    );
  }
}
