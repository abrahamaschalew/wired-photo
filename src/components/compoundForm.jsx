import React, { Component, useState } from "react";

class CompoundForm extends Component {
  state = {
    interval: 0,
    interest: 0,
    amount: 0,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Send the form to App.js to handle it from single source truth
  handleSubmit(event) {
    this.props.compound(this.state);
    event.preventDefault();
  }

  handleEventChange(event, name) {
    let obj = new Object();
    obj[name] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amountFormControlInput"
              value={this.state.amount}
              onChange={(e) => this.handleEventChange(e, "amount")}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Interval</label>
            <input
              type="number"
              className="form-control"
              id="intervalFormControlInput"
              value={this.state.interval}
              onChange={(e) => this.handleEventChange(e, "interval")}
            ></input>
          </div>

          <div className="mb-3">
            <label className="form-label">Interest</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="interestFormControlInput"
              value={this.state.interest}
              onChange={(e) => this.handleEventChange(e, "interest")}
            ></input>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Compound
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CompoundForm;
