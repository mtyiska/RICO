import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PageHeader from "../templates/PageHeader";
import StepBuilder from './step-builder/StepBuilderLayout';

export default class FormLayout extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <PageHeader />
                <div className="content">
                    <div className="container-fluid">
                        {/* <div className="row">
                            <div className="col-12">
                                <div className="invoice p-3 mb-3">
                                    <div className="row">
                                        <nav className="nav nav-pills flex-column flex-sm-row">
                                            <Link className="flex-sm-fill text-sm-center nav-link active" Link to="/form/one" >Active</Link>
                                            <Link className="flex-sm-fill text-sm-center nav-link" Link to="/form/two" >Link</Link>
                                            <Link className="flex-sm-fill text-sm-center nav-link" Link to="/form/three" >Link</Link>
                                            <Link className="flex-sm-fill text-sm-center nav-link disabled" Link to="/form/four" >Disabled</Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <StepBuilder />
                    </div>
                </div>
            </div>
        )
    }
}
