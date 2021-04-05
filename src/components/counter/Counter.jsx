import React, { Component } from "react";

import Display from "./Display";
import StepForm from "./StepForm";
import Buttons from "./Buttons";
import "./Counter.css";

export default class Couter extends Component {
  state = {
    number: this.props.number || 0,
    step: this.props.step || 5,
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display number={this.state.number} />
        <StepForm step={this.state.step} setStep={this.setStep} />
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}
