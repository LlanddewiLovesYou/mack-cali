import React from 'react';


class CompletedSales extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      completed: 172,
      completedCount: 100,
      complete: false,
    }
    this.incrementCounts = this.incrementCounts.bind(this)
  }

  componentDidMount() {
    this.incrementCounts()
  }

  incrementCounts(){
    let { completedCount } = this.state;
    let complete = true;
    // if (gaapCount < this.state.gaap) {
    //   complete = false;
    //   gaapCount = gaapCount + 0.1
    // }

    if (this.state.completedCount < this.state.completed) {
      complete = false;
      completedCount = completedCount + 2
    }

    this.setState({ completedCount, complete });

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
      <main className='col-md-4 completed-container'>
        <div className='completed-label'>COMPLETED</div>
        <div className='completed-item'>$1,{this.state.completedCount}m</div>
        <div className='completed-label'>Non-Core Asset Sales<br/>2015-2017</div>
      </main>
    )
  }

}

export default CompletedSales;
