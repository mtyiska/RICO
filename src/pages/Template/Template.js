import React, { Component } from "react";

import PageHeader from "../components/PageHeader";

import TemplateSet from "./TemplateSet";

export default class Template extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = `custom_js/form_elements.js`;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="content-wrapper">
        <PageHeader title="Templates" />
        <TemplateSet />
      </div>
    );
  }
}
