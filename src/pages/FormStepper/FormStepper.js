import React, { Component } from "react";
import "./FormStepper.scss";
import PageHeader from "../components/PageHeader";
import Stepper from "./Stepper";
import Basics from "./Basics";
import KeyDetails from "./KeyDetails";
import FormSubmission from "./FormSubmission";

const stepsArray = ["Basic Details", "Additional Details", "Submit"];

export default class FormStepp extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1,
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 3) {
      this.setState({
        currentStep: newStep,
      });
    }
  }
  render() {
    const { currentStep } = this.state;
    return (
      <div className="content-wrapper">
        <PageHeader title="Forms" />
        <div className="content">
          <div className="container-fluid">
            <div className="stepper-container-horizontal">
              <Stepper
                steps={stepsArray}
                direction="horizontal"
                stepColor="#ee5253"
                currentStepNumber={currentStep - 1}
              />
            </div>
            <div className="card card-default">
              {currentStep === 1 ? (
                <Basics />
              ) : currentStep === 2 ? (
                <KeyDetails />
              ) : (
                <FormSubmission />
              )}
              <div className="card-footer">
                {currentStep === 3 ? (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.handleClick()}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-primary float-right"
                      onClick={() => this.handleClick("next")}
                    >
                      Submit
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.handleClick()}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-primary float-right"
                      onClick={() => this.handleClick("next")}
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
