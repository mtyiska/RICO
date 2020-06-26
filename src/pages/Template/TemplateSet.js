import React, { Component } from "react";
import { Link } from "react-router-dom";
import TemplateEntry from "./TemplateEntry";

export default class TemplateSet extends Component {
  state = {
    templates: [
      {
        templateId: "#3495",
        templateName: "Template 1",
        createdOn: new Date(),
        createdBy: "Michael Tyiska",
      },
      {
        templateId: "#3496",
        templateName: "Template 2",
        createdOn: new Date(),
        createdBy: "Michael Tyiska",
      },
      {
        templateId: "#3497",
        templateName: "Template 3",
        createdOn: new Date(),
        createdBy: "Michael Tyiska",
      },
      {
        templateId: "#3498",
        templateName: "Template 4",
        createdOn: new Date(),
        createdBy: "Michael Tyiska",
      },
    ],
  };
  render() {
    const template = this.state.templates.map((temp, index) => {
      return (
        <TemplateEntry
          key={index}
          templateId={temp.templateId}
          templateName={temp.templateName}
          createdOn={temp.createdOn}
          createdBy={temp.createdBy}
        />
      );
    });
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card card-default">
            <div className="card-header">
              <Link to="/form">
                <button className="btn btn-success ">
                  Create new template
                </button>
              </Link>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Template Id</th>
                    <th style={{ width: "20%" }}>Template Name</th>
                    <th style={{ width: "20%" }}>Created On</th>
                    <th style={{ width: "20%" }}>Created By</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <>{template}</>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
