import React from 'react';
import Navbar from './Navbar'
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'
import { Bar, Doughnut } from 'react-chartjs-2'
import pattern from 'patternomaly';

class IncreasedRoselandInt extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className='col-md-3'>
          <div className="chart-heading">Increased Roseland Ownership Interest</div>
          <Bar data={{
              labels: ['2015', '2016', '2017'],
              datasets: [{
                data: [44.26, 50.54, 67.29],
                backgroundColor: [
                  pattern.draw('line', '#a7a9ac'),
                  pattern.draw('line', '#afbc4a'),
                  pattern.draw('line', '#008996'),
                ],
                borderColor: ['#231f20', '#231f20', '#231f20'],
                borderWidth: [1, 1, 1],
              }]
            }}
            options={{
              legend: {display: false},
              tooltips: {enabled:false},
              scales: {
                yAxes: [{display: false,
                  ticks: {beginAtZero: true, max: 80}
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
                      ctx.fillText(`${data}%`, bar._model.x, bar._model.y - 5);
                    });
                  });
                }
              }
            }}
            height={260}>
          </Bar>
        </div>
    )
  }

}



export default IncreasedRoselandInt
