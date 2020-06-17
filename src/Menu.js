import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/" className="brand-link">
            {/* <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            /> */}
            <i
              className="nav-icon fas fa-robot brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">Dashboard App</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.png"
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info">
                <a href="fake" className="d-block">
                  Michael Tyiska
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <a href="/" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      {/* <i className="right fas fa-angle-left" /> */}
                    </p>
                  </a>
                </li>

                <li className="nav-item has-treeview">
                  <a href="fake" className="nav-link">
                    <i className="nav-icon fas fa-robot" />
                    <p>
                      Automations
                      <span className="badge badge-info right">8</span>
                      {/* <i className="right fas fa-angle-left" /> */}
                    </p>
                  </a>
                </li>

                <li className="nav-item has-treeview">
                  <a href="fake" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>
                      Templates
                      {/* <i className="fas fa-angle-left right" /> */}
                      <span className="badge badge-info right">1</span>
                    </p>
                  </a>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-calendar-alt" />
                    <p>
                      Schedules
                      <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
