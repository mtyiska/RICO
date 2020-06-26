import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./common.css";

export default class Menu extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4 sticky-top position-fixed">
        <Link to="/" className="brand-link">
          <i
            className="nav-icon fas fa-robot brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">RICO</span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <li className="nav-item has-treeview">
                <Link to="/" className="nav-link ">
                  <i className="nav-icon fas fa-plus-square" />
                  <p>Create</p>
                </Link>
              </li> */}

              <li className="nav-item has-treeview">
                <Link to="/template" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Templates
                    <span className="badge badge-info right">4</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item has-treeview">
                <Link to="/automations" className="nav-link">
                  <i className="nav-icon fas fa-robot" />
                  <p>
                    Work Flows
                    <span className="badge badge-info right">3</span>
                  </p>
                </Link>
              </li>

              {/* <li className="nav-item has-treeview">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    Schedules
                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
