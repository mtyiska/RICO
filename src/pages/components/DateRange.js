import React, { Component } from "react";

export default class DateRange extends Component {
  componentDidMount() {
    console.log("did mount Date Range");
    const script = document.createElement("script");
    script.src = `custom_js/history.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="far fa-calendar-alt" />
            </span>
          </div>
          <input
            type="text"
            className="form-control float-right"
            id="reservation"
          />
        </div>
      </div>
    );
  }
}
