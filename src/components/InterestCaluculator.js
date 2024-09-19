import React from "react";
import "./InterestCaluculator.css";

export default class InterestCaluculator extends React.Component {
  constructor() {
    super();
    this.state = {
      principalAmount: 0,
      yearlyInterestRate: 0,
      monthlyInterestRate: 0,
      numberOfYears: 0,
      numberOfMonths: 0,
      monthlyEmi: 0
    };
  }

  calculateMonthlyEmi = () => {
    console.log(
      this.state.principalAmount,
      this.state.yearlyInterestRate,
      this.state.numberOfYears
    );
  };

  render() {
    const {
      principalAmount,
      yearlyInterestRate,
      numberOfYears,
      monthlyEmi
    } = this.state;
    return (
      <>
        <div className="container">
          <div>
            <label>Principal Amount</label>
            <input
              type="number"
              placeholder="total amount"
              value={principalAmount}
              onChange={(e) =>
                this.setState({ principalAmount: parseInt(e.target.value) })
              }
            />
          </div>
          <div>
            <label>Interest Rate</label>
            <input
              type="number"
              placeholder="interest(%)"
              value={yearlyInterestRate}
              onChange={(e) =>
                this.setState({ yearlyInterestRate: parseInt(e.target.value) })
              }
            />
          </div>
          <div>
            <label>Number Of Years</label>
            <input
              type="number"
              placeholder="years"
              value={numberOfYears}
              onChange={(e) =>
                this.setState({ numberOfYears: parseInt(e.target.value) })
              }
            />
          </div>
          <button onClick={this.calculateMonthlyEmi}>Calculate</button>
          <div>
            <span>Your monthly emi will be {monthlyEmi}</span>
          </div>
        </div>
      </>
    );
  }
}
