import React, { Component } from "react";

export default class TemplateEntry extends Component {
  render() {
    return (
      <tr>
        <td>#3495</td>
        <td>
          <p>Template 1</p>
        </td>
        <td>
          <small>06-19-2020</small>
        </td>
        <td>
          <small>Michael Tyiska</small>
        </td>
        <td className="template-actions text-right">
          <a className="btn btn-primary btn-sm" href="/">
            <i className="fas fa-folder"></i>
            View
          </a>
          <a className="btn btn-info btn-sm" href="/">
            <i className="fas fa-pencil-alt"></i>
            Edit
          </a>
          <a className="btn btn-danger btn-sm" href="/">
            <i className="fas fa-trash"></i>
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
