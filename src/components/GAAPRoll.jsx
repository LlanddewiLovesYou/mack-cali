import React from 'react';
import VisibilitySensor from "react-visibility-sensor";


class GAAPRoll extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gaap: 17.9,
      cash: 9.6,
      gaapCount: 15.6,
      cashCount: 7.5,
      complete: false,
      isVisible: false
    }
    this.incrementCounts = this.incrementCounts.bind(this)
    this.handleVisibiltyChange = this.handleVisibiltyChange.bind(this)
  }

  componentDidUpdate() {
    if (this.state.isVisible && this.state.gaapCount < 15.7) {
      this.incrementCounts();
    }
  }

  handleVisibiltyChange(isVisible) {
    if (isVisible !== this.state.isVisible) {
      this.setState({isVisible})
    }
  }

  incrementCounts(){
    let { gaapCount, cashCount } = this.state;
    let complete = true;
    if (gaapCount < this.state.gaap) {
      complete = false;
      gaapCount = gaapCount + 0.1
    }

    if (cashCount < this.state.cash) {
      complete = false;
      cashCount = cashCount + 0.1
    }

    this.setState({ cashCount, gaapCount, complete});

    if (!this.state.complete) {
      setTimeout(this.incrementCounts, 50)
    }

  }

  render() {

    if (this.state.isVisible) {
      return (
        <main className='col-md-4 box'>
          <div className='gaap-container'>
            <div className='gaap-label'>GAAP Rental Rate Rollup<br/>(Excluding Non-Core)</div>
            <div className='gaap-item' id='gaap'>{Math.round( this.state.gaapCount * 10 ) / 10}%</div>
            <hr className='hr'/>
            <div className='gaap-label'>Cash Rental Rate Rollup<br/>(Excluding Non-Core)</div>
            <div className='gaap-item' id='cash'>{Math.round( this.state.cashCount * 10 ) / 10}%</div>
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

export default GAAPRoll;
