import React, { Component } from "react";

export default class TextArea extends Component {
  render() {
    return (
      <textarea
        className="form-control"
        rows={3}
        placeholder="Enter ..."
        defaultValue={""}
      />
    );
  }
}
