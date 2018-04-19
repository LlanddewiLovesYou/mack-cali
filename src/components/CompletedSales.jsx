import React from "react";
import VisibilitySensor from "react-visibility-sensor";

class CompletedSales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 172,
      completedCount: 130,
      complete: false,
      isVisible: false
    };
    this.incrementCounts = this.incrementCounts.bind(this);
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isVisible && this.state.completedCount === 130) {
      this.incrementCounts();
    }
  }

  handleVisibiltyChange(isVisible) {
    if (isVisible !== this.state.isVisible) {
      this.setState({isVisible})
    }
  }

  incrementCounts() {
    let { completedCount } = this.state;
    let complete = true;
    // if (gaapCount < this.state.gaap) {
    //   complete = false;
    //   gaapCount = gaapCount + 0.1
    // }

    if (this.state.completedCount < this.state.completed) {
      complete = false;
      completedCount = completedCount + 2;
    }

    this.setState({ completedCount, complete });

    if (!this.state.complete) {
      setTimeout(this.incrementCounts, 50);
    }

  }

  render() {

    if (this.state.isVisible) {
      return (

      <main className="col-md-4 box completed-container">
        <div className="completed-label">COMPLETED</div>
        <div className="completed-item">$1,{this.state.completedCount}m</div>
        <div className="completed-label">
          Non-Core Asset Sales<br />2015-2017
        </div>
        <VisibilitySensor
          onChange={this.handleVisibiltyChange}
        />
      </main>
    )
    } else {
      return (

      <main>
        <div className="placeholder" />
        <VisibilitySensor
          onChange={this.handleVisibiltyChange}
        />
      </main>
    )
    }
  }
}

export default CompletedSales;
