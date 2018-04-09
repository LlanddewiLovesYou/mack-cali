import React from 'react';
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'
import {Doughnut} from 'react-chartjs-2'
import piecelabel from "chart.piecelabel.js"
// import Navbar from './Navbar'
// import OfficeBaseRent from './OfficeBaseRent'
// import IncreasedRoselandInt from './IncreasedRoselandInt'
// import ResidentPortfolioGrow from './ResidentPortfolioGrow'

class Dough2017 extends React.Component {

render() {
  return (
    <div className='col-md-3'>
      <Doughnut data={{
          labels: ['Waterfront', 'Class A Suburban', 'Suburban', 'Flex', 'Residential'],
          datasets: [{
            data:[32, 12, 25,7, 20],
            backgroundColor: ['#231f20', '#008996', '#afbc4a', '#c7cf8a', '#a7a9ac']
          }],
        }}
        options={{
          plugins: [piecelabel],
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
              ctx.arc(x, y, 90, 0, 2*Math.PI);
              ctx.fillStyle = "#DAF1F2";
              ctx.fill();
              ctx.fillStyle = "#008996"
              ctx.fillText("2017", x, y);
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

export default Dough2017;
