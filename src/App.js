import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import History from "./History";
import Dashboard from "./Dashboard";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Dashboard />
        {/* <History /> */}
        <Footer />
      </div>
    );
  }
}
