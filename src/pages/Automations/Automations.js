import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Process from "./Process";
import Trigger from "./Trigger";

class Automations extends Component {
  state = {
    automations: [57, 34, 89],
  };
  render() {
    const processes = this.state.automations.map((process, index) => {
      return <Process progress={process} key={index} />;
    });
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Automations</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <Trigger />
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{ width: "1%" }}>#</th>
                    <th style={{ width: "20%" }}>Automation Name</th>
                    <th style={{ width: "30%" }}>Team Members</th>
                    <th>Automation Progress</th>
                    <th style={{ width: "8%" }} className="text-center">
                      Status
                    </th>
                    <th style={{ width: "20%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  <>{processes}</>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchToProps(dispath) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispath
  );
}

export default connect(null, mapDispatchToProps)(Automations);
