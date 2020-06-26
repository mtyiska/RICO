import React, { Component } from "react";

export default class KeyDetails extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `custom_js/form_elements.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <>
        <div className="card-header">
          <h3 className="card-title">Additional Details</h3>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <select
                  className="form-control select2 form-control-lg"
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
            </div>

            <div className="col-6">
              <div
                className="input-group date"
                id="reservationdate"
                data-target-input="nearest"
              >
                <input
                  type="text"
                  className="form-control datetimepicker-input"
                  data-target="#reservationdate"
                  placeholder="Date"
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
            </div>
          </div>
          <br />

          <div className="row">
            <div className="form-group col-6">
              {/* <label>Custom Select Multiple</label> */}
              <select multiple class="custom-select">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
            </div>
            <div className="col-6">
              <div className="form-check icheck-danger">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <div className="form-check icheck-danger">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="defaultCheck2"
                />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  checkbox
                </label>
              </div>
              <div className="form-check icheck-primary">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <div className="form-check icheck-success">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="defaultCheck2"
                />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  checkbox
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
