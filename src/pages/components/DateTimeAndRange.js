import React, { Component } from "react";

export default class DateTimeAndRange extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `custom_js/history.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="form-group col-sm-6">
        <label>Date and time range:</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="far fa-clock" />
            </span>
          </div>
          <input
            type="text"
            className="form-control float-right"
            id="reservationtime"
          />
        </div>
      </div>
    );
  }
}
