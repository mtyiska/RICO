import React, { Component } from "react";

export default class Process extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }
  render() {
    // const { progress } = this.state;
    // console.log(this.props.progress);
    return (
      <tr>
        <td>#</td>
        <td>
          <div>FX Revaluation Setup</div>
        </td>
        <td>
          <ul className="list-inline">
            <li className="list-inline-item">
              <img
                alt="Avatar"
                className="table-avatar"
                src="../../dist/img/avatar.png"
              />
            </li>
            <li className="list-inline-item">
              <img
                alt="Avatar"
                className="table-avatar"
                src="../../dist/img/avatar2.png"
              />
            </li>
            <li className="list-inline-item">
              <img
                alt="Avatar"
                className="table-avatar"
                src="../../dist/img/avatar3.png"
              />
            </li>
            <li className="list-inline-item">
              <img
                alt="Avatar"
                className="table-avatar"
                src="../../dist/img/avatar04.png"
              />
            </li>
          </ul>
        </td>
        <td className="project_progress">
          <div className="progress progress-sm">
            <div
              className="progress-bar bg-green"
              role="progressbar"
              // aria-volumenow={57}
              // aria-volumemin={0}
              // aria-volumemax={100}
              style={{ width: `${this.props.progress}%` }}
            ></div>
          </div>
          <small>{this.props.progress}% Complete</small>
        </td>
        <td className="project-state">
          <span className="badge badge-warning">Running</span>
        </td>
        <td className="template-actions text-right">
          <a className="btn btn-primary btn-sm" href="/">
            <i className="fas fa-play-circle"></i>Start
          </a>
          <a className="btn btn-info btn-sm" href="/">
            <i className="fas fa-redo"></i>Retry
          </a>
          <a className="btn btn-danger btn-sm" href="/">
            <i className="fas fa-stop-circle"></i>Stop
          </a>
        </td>
      </tr>
    );
  }
}
