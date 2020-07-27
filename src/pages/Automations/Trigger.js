import React from "react";

const Trigger = ({
  onAddTriggers,
  listOfAutomations,
  handleSelectedAutomation,
  selectedAutomation,
}) => {
  const loa = listOfAutomations;
  const list = loa.map((automation) => (
    <option key={automation.objectID} value={automation.option}>
      {automation.option}
    </option>
  ));

  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="form-group col-3">
            <select
              className="custom-select"
              id="automations"
              onChange={handleSelectedAutomation}
              name="automations"
              defaultValue={selectedAutomation}
            >
              {list}
            </select>
          </div>

          <div className="form-group col-3">
            <button className="btn btn-success " onClick={onAddTriggers}>
              Create Trigger
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trigger;
