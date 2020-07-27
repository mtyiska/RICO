import React from "react";
import "./Automation.css";

const Process = ({ automations }) =>
  automations.map(({ objectID, ...item }) => <Item key={objectID} {...item} />);

const Item = ({ automationName, startTime, endTime, status }) => (
  <tr>
    <td>
      <div>{automationName}</div>
    </td>

    <td className="">
      <span className="">{startTime}</span>
    </td>
    <td className="">
      <span className="">{endTime}</span>
    </td>
    <td className="">
      <span className="badge badge-warning">{status}</span>
    </td>
    <td className="text-right wf-buttons">
      <button className="btn btn-primary btn-sm">
        <i className="fas fa-play-circle"></i>Start
      </button>
      <button className="btn btn-info btn-sm">
        <i className="fas fa-redo"></i>Retry
      </button>
      <button className="btn btn-danger btn-sm">
        <i className="fas fa-stop-circle"></i>Stop
      </button>
    </td>
  </tr>
);

export default Process;
