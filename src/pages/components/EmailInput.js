import React, { Component } from "react";

export default class EmailInput extends Component {
  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        placeholder={this.props.cLabel}
      />
    );
  }
}
