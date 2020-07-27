import React, { Component } from "react";
import Process from "./Process";
import Trigger from "./Trigger";
import ContentLayout from "./ContentLayout";

const automations = [
  {
    objectID: Math.floor(Math.random() * 101),
    automationName: "FX Accounting Revaluation Setup",
    startTime: "2020-07-24 03:43:55",
    endTime: "",
    status: "Running",
  },
];

const listOfAutomations = [
  {
    objectID: "loa1",
    option: "FX Accounting Revaluation",
  },
  {
    objectID: "loa2",
    option: "FX Accounting Setup",
  },
  {
    objectID: "loa3",
    option: "Transportation",
  },
  {
    objectID: "loa4",
    option: "Asset Transfer",
  },
  {
    objectID: "loa5",
    option: "Secondary Ledger",
  },
  {
    objectID: "loa6",
    option: "SVOD",
  },
  {
    objectID: "loa7",
    option: "CFS Promotions",
  },
  {
    objectID: "loa8",
    option: "Choose automation...",
  },
];

class Automations extends Component {
  constructor() {
    super();
    this.state = {
      automations: automations,
      listOfAutomations: listOfAutomations,
      selectedAutomation: "Choose automation...",
    };
  }

  onAddTriggers = (event) => {
    const value = this.state.selectedAutomation;
    if (value === "Choose automation...") {
      alert("choose one");
      return;
    }
    const newTrigger = {
      objectID: Math.floor(Math.random() * 101),
      automationName: this.state.selectedAutomation,
      startTime: "2020-07-24 03:43:55",
      endTime: "",
      status: "Running",
    };

    this.setState((state) => {
      const automations = state.automations.concat(newTrigger);
      return {
        automations,
      };
    });
  };

  handleSelectedAutomation = (event) => {
    const value = event.target.value;
    this.setState({ selectedAutomation: value });
  };

  render() {
    const { automations } = this.state;

    return (
      <ContentLayout>
        <div className="card-body p-0">
          <Trigger
            onAddTriggers={this.onAddTriggers}
            listOfAutomations={this.state.listOfAutomations}
            handleSelectedAutomation={this.handleSelectedAutomation}
            selectedAutomation={this.state.selectedAutomation}
          />
        </div>
        <div className="card-body p-0">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Automation Name</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-right"></th>
              </tr>
            </thead>
            <tbody>
              <Process automations={automations} />
            </tbody>
          </table>
        </div>
      </ContentLayout>
    );
  }
}

export default Automations;
