import React from "react";

const ContentLayout = ({ children }) => (
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
        {children}
      </div>
    </div>
  </section>
);
export default ContentLayout;
