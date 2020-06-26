import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import Automations from "./Automations";

export default class AutomationLayout extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <PageHeader title="Work Flows" />
        <Automations />
      </div>
    );
  }
}
