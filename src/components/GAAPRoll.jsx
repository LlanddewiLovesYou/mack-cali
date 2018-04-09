import React from 'react';


class GAAPRoll extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gaap: 17.9,
      cash: 9.6,
      gaapCount: 15.6,
      cashCount: 7.5,
      complete: false,
    }
    this.incrementCounts = this.incrementCounts.bind(this)
  }

  componentDidMount() {
    this.incrementCounts()
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

    //
    // while (this.state.complete === false) {
    //   this.setState({complete: true})
    //   if (this.state.gaapCount !== this.state.gaap){
    //     setInterval(this.setState({gaapCount: this.state.gaapCount + 0.1}), 250)
    //     this.setState({complete:false})
    //   }
    //   if (this.state.cashCount !== this.state.cash) {
    //     setInterval(this.setState({cashCount: this.state.cashCount + 0.1}), 250)
    //     this.setState({complete:false})
    //   }
    // }
    // if (this.state.complete === false) {
    //   this.incrementCounts()
    //
    // }

  }

  render() {
    return (
      <main className='col-md-3'>
        <div className='gaap-container'>
          <div className='gaap-label'>GAAP ROLLUP</div>
          <div className='gaap-item' id='gaap'>{Math.round( this.state.gaapCount * 10 ) / 10}%</div>
          <hr/>
          <div className='gaap-label'>CASH ROLLUP</div>
          <div className='gaap-item' id='cash'>{Math.round( this.state.cashCount * 10 ) / 10}%</div>
        </div>
      </main>
    )
  }

}

export default GAAPRoll;
