import React, { Component } from "react";

export default class Elements extends Component {
  render() {
    return (
      <div className="form-group">
        <select className="form-control select2" style={{ width: "100%" }}>
          <option selected="selected">Input </option>
          <option>Drop Down</option>
          <option>Date Range</option>
        </select>
      </div>
    );
  }
}
