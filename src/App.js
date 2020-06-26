import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Menu from "./common/Menu";
import History from "./pages/History/History";
import Dashboard from "./pages/Dashboard/Dashboard";
import Template from "./pages/Template/Template";
import FormStepper from "./pages/FormStepper/FormStepper";
import AutomationLayout from "./pages/Automations/AutomationLayout";
import Modal from "./utility/Modal/Modal";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={Menu} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/template" component={Template} />
        <Route exact path="/history" component={History} />
        <Route exact path="/automations" component={AutomationLayout} />
        <Route path="/form" component={FormStepper} />
        <Route path="/" component={Footer} />
        <Route path="/" component={Modal} />
      </Router>
    );
  }
}
