import React, { Component } from "react";

export default class Trigger extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `custom_js/form_elements.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <div className="card-body">
          <div className="row">
            <div className="form-group col-3">
              <select
                className="form-control select2"
                style={{ width: "100%" }}
              >
                <option selected="selected">FX Accounting Revaluation</option>
                <option>FX Accounting Setup</option>
                <option>Transportation</option>
                <option>Asset Transfer</option>
                <option>Secondary Ledger</option>
                <option>SVOD</option>
                <option>CFS Promotions</option>
              </select>
            </div>
            <div className="form-group col-3">
              <select
                className="form-control select2"
                style={{ width: "100%" }}
              >
                <option selected="selected">Template 1</option>
                <option>Template 2</option>
                <option>Template 3</option>
                <option>Template 4</option>
                <option>Template 5</option>
                <option>Template 6</option>
                <option>Template 7</option>
              </select>
            </div>

            <div className="form-group col-3">
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
            <div className="form-group col-3">
              <button className="btn btn-success ">Create Trigger</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
