import React from 'react';
import Navbar from './Navbar'
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'
import OfficeBaseRent from './OfficeBaseRent'
import IncreasedRoselandInt from './IncreasedRoselandInt'
import ResidentPortfolioGrow from './ResidentPortfolioGrow'
import {Doughnut} from 'react-chartjs-2'
import piecelabel from "chart.piecelabel.js"

class YearEndHighlights extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='yearend-graphs-container'>

        <div className='row'>
          <OfficeBaseRent />
          <div className='col-md-3 empty'>Count up number widget</div>
          <IncreasedRoselandInt />
        </div>
        <div className='row'>
          <div className='col-md-3 col-md-offset-2'>
            <Doughnut data={{
                labels: ['Waterfront', 'Class A Suburban', 'Suburban', 'Flex', 'Residnetial'],
                datasets: [{
                  data:[23, 10, 42, 15, 10],
                  backgroundColor: ['#231f20', '#008996', '#afbc4a', '#c7cf8a', '#a7a9ac']
                }],
              }}
              options={{
                plugins: [piecelabel],
                cutoutPercentage: 65,
                legend: {display: false},
                pieceLabel: {
                  render: 'percentage',
                  fontColor: 'white',
                  precision: 2,
                  fontSize: 16,
                  fontFamily: '"Josefin Sans"'
                },
                animation: {
                  onComplete: function() {
                    const chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                    ctx.font = "20px Josefin Sans";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    const x = chartInstance.canvas.clientWidth / 2;
                    const y = chartInstance.canvas.clientHeight / 2;
                    ctx.beginPath();
                    ctx.arc(x, y, 82, 0, 2*Math.PI);
                    ctx.fillStyle = "#DAF1F2";
                    ctx.fill();
                    ctx.fillStyle = "#008996"
                    ctx.fillText("2015", x, y);
                  }
                }
              }}
              height={300}
              >
            </Doughnut>
            <div className='donut-legend'>
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
          </div>
        </div>
        <div className='row'>
          <ResidentPortfolioGrow />
        </div>
      </main>
    )
  }

}



// <div className='col-md-1'>margin div md-1</div>
export default YearEndHighlights
// <div className='col-md-1'>margin div md-1</div>

// <img src={graphConstruction} className='construction-image'></img>
