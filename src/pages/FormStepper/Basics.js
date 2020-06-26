import React, { Component } from "react";

export default class Basics extends Component {
  render() {
    return (
      <>
        <div className="card-header">
          <h3 className="card-title">Basic Details</h3>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="Form ID - 12938"
                  disabled
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="Title"
                />
              </div>
            </div>
          </div>
          <textarea
            class="form-control form-control-lg"
            rows="6"
            placeholder="Enter ..."
          ></textarea>
        </div>
      </>
    );
  }
}
