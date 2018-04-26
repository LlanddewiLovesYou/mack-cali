import React from "react";
import VisibilitySensor from "react-visibility-sensor";

class GAAPRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gaap: 17.9,
      cash: 9.6,
      gaapCount: 15.6,
      cashCount: 7.5,
      complete: false,
      isVisible: false
    };
    this.incrementCounts = this.incrementCounts.bind(this);
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
  }

  handleVisibiltyChange(isVisible) {
    if (!this.state.isVisible) {
      this.setState({ isVisible });
    }
  }

  incrementCounts() {
    let { gaapCount, cashCount } = this.state;
    let complete = true;
    if (gaapCount < this.state.gaap) {
      complete = false;
      gaapCount = gaapCount + 0.1;
    }

    if (cashCount < this.state.cash) {
      complete = false;
      cashCount = cashCount + 0.1;
    }

    this.setState({ cashCount, gaapCount, complete });

    if (!this.state.complete) {
      setTimeout(this.incrementCounts, 100);
    }
  }

  render() {
    if (this.state.isVisible && this.state.gaapCount < 15.7) {
      this.incrementCounts();
    }
    return (
      <main className="col-lg-3 chart-margin">
        {this.state.isVisible ? (
          <div className="gaap-container">
            <div className="gaap-label">
              GAAP Rental Rate Rollup<br />(Excluding Non-Core)
            </div>
            <div className="gaap-item" id="gaap">
              {Math.round(this.state.gaapCount * 10) / 10}%
            </div>
            <hr className="hr" />
            <div className="gaap-label">
              Cash Rental Rate Rollup<br />(Excluding Non-Core)
            </div>
            <div className="gaap-item" id="cash">
              {Math.round(this.state.cashCount * 10) / 10}%
            </div>
          </div>
        ) : (
          <div className="col-xs-3 placeholder" />
        )}
        <VisibilitySensor onChange={this.handleVisibiltyChange} />
      </main>
    );
  }
}

export default GAAPRoll;
