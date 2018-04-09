import React from 'react';
import piecelabel from "chart.piecelabel.js"
import '../assets/stylesheets/YearEndHighlight.css'
import graphConstruction from '../assets/images/graphconstruction.png'
import Navbar from './Navbar'
import OfficeBaseRent from './OfficeBaseRent'
import IncreasedRoselandInt from './IncreasedRoselandInt'
import ResidentPortfolioGrow from './ResidentPortfolioGrow'
import Dough2015 from './Dough2015'
import Dough2016 from './Dough2016'
import Dough2017 from './Dough2017'
import DoughLegend from './DoughLegend'
import GAAPRoll from './GAAPRoll'
import CompletedSales from './CompletedSales'

class YearEndHighlights extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='yearend-graphs-container'>
        <div className='row'>
          <div className='yearend-title'>Year End Highlights</div>
        </div>
        <div className='row'>
          <OfficeBaseRent />
          <GAAPRoll />
          <IncreasedRoselandInt />
          <div className='col-md-9 col-md-offset-2' id='first-row'></div>
        </div>
        <div className='row donut-head-flex'>
          <div className='col-md-3 donut-heading'>
            Increased Portfolio Composition
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <Dough2015 />
            <Dough2016 />
            <Dough2017 />
          </div>
        </div>
        <div className='row'>
          <DoughLegend />
        </div>
        <div className='row'>
          <ResidentPortfolioGrow />
          <CompletedSales />
        </div>
      </main>
    )
  }

}



// <div className='col-md-1'>margin div md-1</div>
export default YearEndHighlights
// <div className='col-md-1'>margin div md-1</div>

// <img src={graphConstruction} className='construction-image'></img>
