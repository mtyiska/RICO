import React, { Component } from "react";

export default class FileAttachment extends Component {
  render() {
    return (
      <div className="form-group col-sm-6">
        <label htmlFor="exampleInputFile">File input</label>
        <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="exampleInputFile"
            />
            <label className="custom-file-label" htmlFor="exampleInputFile">
              Choose file
            </label>
          </div>
          <div className="input-group-append">
            <span className="input-group-text" id>
              Upload
            </span>
          </div>
        </div>
      </div>
    );
  }
}
