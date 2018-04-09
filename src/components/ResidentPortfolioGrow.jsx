import React from 'react';
import Navbar from './Navbar'
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'
import { Bar, Doughnut } from 'react-chartjs-2'
import pattern from 'patternomaly';

class ResidentPortfolioGrow extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='col-md-5 col-md-offset-2'>
          <div className="chart-heading">Residential Portfolio Growing FFO Contribution</div>
          <Bar data={{
              labels: ['2017', '2018', '2019', '2020'],
              datasets: [{
                data: [30, 70.7, 108.7, 248.5],
                backgroundColor: [
                  pattern.draw('line', '#a7a9ac'),
                  pattern.draw('line', '#c7cf8a'),
                  pattern.draw('line', '#afbc4a'),
                  pattern.draw('line', '#008996'),
                ],
                borderColor: ['#231f20', '#231f20', '#231f20', '#231f20'],
                borderWidth: [1, 1, 1, 1],
              }]
            }}
            options={{
              legend: {display: false},
              tooltips: {enabled:false},
              events: [],
              scales: {
                yAxes: [{display: false,
                  ticks: {beginAtZero: true, max: 300}
                }],
                xAxes: [{barThickness: 72,
                  categoryPercentage: .74,
                  ticks: {fontColor:'#008996', fontFamily:'Josefin Sans'},
                  gridLines: {display: false}
                }]
              },
              responsive: false,
              animation: {
                onComplete: function() {
                  var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
                  ctx.textAlign = "center";
                  ctx.font = "16px Josefin Sans";
                  ctx.fillStyle = "rgba(0, 0, 0, 1)";
                  ctx.textBaseline = "bottom";

                  this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(bar, index) {
                      var data = dataset.data[index];
                      if (data <= 50) {
                        data = 2.2
                      }
                      ctx.fillText(`$${data}M`, bar._model.x, bar._model.y - 5);
                    });
                  });
                }
              }
            }}
            height={260}
            width={385}>
          </Bar>
        </div>
    )
  }

}



export default ResidentPortfolioGrow;
