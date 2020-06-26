import React, { Component } from "react";
import EmailInput from "./templates/EmailInput";
import PasswordInput from "./templates/PasswordInput";
import SelectDropDown from "./templates/SelectDropDown";
import FileAttachment from "./templates/FileAttachment";
import DateTimeAndRange from "./templates/DateTimeAndRange";
import DateRange from "./templates/DateRange";
import Elements from "./templates/Elements";
import RegularDate from "./templates/RegularDate";
import forms from "../forms";

export default class FormSet extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card card-default">
            <div className="card-header">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-success ">
                    Add new Form Element
                  </button>
                </div>
                <div className="col-4">
                  <Elements />
                </div>

                <div className="col-4">
                  <button className="btn btn-secondary float-right">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <EmailInput />
                <RegularDate />
                {/* <PasswordInput /> */}
                {/* <DateTimeAndRange /> */}
                {/* <DateRange /> */}
              </div>
              <br />
              <br />
              <br />
              <br />

              <div className="row">
                <FileAttachment />
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
