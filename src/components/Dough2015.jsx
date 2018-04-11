import React from 'react';
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'
import {Chart, Doughnut} from 'react-chartjs-2'

// import Navbar from './Navbar'
// import OfficeBaseRent from './OfficeBaseRent'
// import IncreasedRoselandInt from './IncreasedRoselandInt'
// import ResidentPortfolioGrow from './ResidentPortfolioGrow'

class Dough2015 extends React.Component {

render() {
  return (
    <div className='col-md-4 box'>
      <Doughnut data={{
          labels: ['Waterfront', 'Class A Suburban', 'Suburban', 'Flex', 'Residential'],
          datasets: [{
            data:[23, 10, 42, 15, 10],
            backgroundColor: ['#231f20', '#008996', '#afbc4a', '#c7cf8a', '#a7a9ac']
          }],
        }}
        type="doughnut"
        options={{
          layout: {
            padding: {
              top: 0,
              bottom: 0,
              left: 10,
              right: 10,
            }
          },
          cutoutPercentage: 65,
          legend: {display: false},
          responsive: false,
          tooltips: {enabled:false},
          events: [],
          pieceLabel: {
            render: 'percentage',
            fontColor: 'white',
            precision: 0,
            fontSize: 16,
            fontFamily: 'Josefin Sans'
          },
          animation: {
            onComplete: function() {
              const chartInstance = this.chart,
              ctx = chartInstance.ctx;
              ctx.font = "32px Josefin Sans";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              const x = chartInstance.canvas.clientWidth / 2;
              const y = chartInstance.canvas.clientHeight / 2;
              ctx.beginPath();
              ctx.arc(x, y, 90, 0, 2*Math.PI);
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
    </div>
    )
  }

}

export default Dough2015;
