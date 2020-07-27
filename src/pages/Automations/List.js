import React from "react";

export default function List(props) {
  const { automationName, startTime } = props.items;

  return (
    <tr>
      <td>
        <div>{automationName}</div>
      </td>

      <td className="">
        <span className="">{startTime}</span>
      </td>
      <td className="">
        <span className="">endTime</span>
      </td>
      <td className="">
        <span className="badge badge-warning">status</span>
      </td>
      <td className="text-right">
        <button className="btn btn-primary btn-sm" href="/">
          <i className="fas fa-play-circle"></i>Start
        </button>
        <button className="btn btn-info btn-sm" href="/">
          <i className="fas fa-redo"></i>Retry
        </button>
        <button className="btn btn-danger btn-sm" href="/">
          <i className="fas fa-stop-circle"></i>Stop
        </button>
      </td>
    </tr>
  );
}
