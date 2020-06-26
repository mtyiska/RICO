import React, { Component } from "react";

export default class SelectDropDown extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="form-group">
          <label>Minimal</label>
          <select className="form-control select2" style={{ width: "100%" }}>
            <option selected="selected">Alabama</option>
            <option>Alaska</option>
            <option>California</option>
            <option>Delaware</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Washington</option>
          </select>
        </div>
      </div>
    );
  }
}
