import React, { Component } from "react";

class CompoundResult extends Component {
  state = {
    results: [1, 2, 3],
  };
  render() {
    let listItem;
    if (this.props.result.compoundInTime.length > 0) {
      listItem = this.props.result.compoundInTime.map((compound) => (
        <li key={compound.index}>
          #{compound.index} <p>{compound.amount}</p>
        </li>
      ));
    }
    return (
      <div className="container center">
        <h4>Compounding Result</h4>
        <ul className="list-group">{listItem}</ul>
        <p className="total-result">
          Total Compounding Result =&gt;
          {this.props.result.amount}
        </p>
      </div>
    );
  }
}

export default CompoundResult;
