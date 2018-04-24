import React from 'react';
import '../assets/stylesheets/YearEndHighlight.css'
// import graphConstruction from '../assets/images/graphconstruction.png'
// import {Doughnut} from 'react-chartjs-2'
// import piecelabel from "chart.piecelabel.js"


class DoughLegend extends React.Component {

  render() {
    return (
          <div className='donut-legend col-12'>

            <div className='legend-label'>
              <div className='legend-swatch' id='waterfront'></div>
              Waterfront
            </div>

            <div className='legend-label'>
              <div className='legend-swatch' id='class-a'></div>
              Class A Suburban
            </div>

            <div className='legend-label'>
              <div className='legend-swatch' id='suburban'></div>
              Suburban
            </div>

            <div className='legend-label'>
              <div className='legend-swatch' id='flex'></div>
              Flex
            </div>

            <div className='legend-label'>
              <div className='legend-swatch' id='residential'></div>
              Residential
            </div>

          </div>
    )
  }

}

export default DoughLegend;
