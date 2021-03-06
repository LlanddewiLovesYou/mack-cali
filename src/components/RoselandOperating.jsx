import React from "react";
import Navbar from "./Navbar";
import graphConstruction from "../assets/images/graphconstruction.png";
import "../assets/stylesheets/YearEndHighlight.css";
import { Bar, Doughnut } from "react-chartjs-2";
import pattern from "patternomaly";
import VisibilitySensor from "react-visibility-sensor";

class RoselandOperating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  render() {
    return (
      <div className="col-lg-3 chart-margin">
        <div className="chart-heading" id="rose-heading">
          Roseland Operating Units
        </div>
        {this.state.isVisible ? (
          <Bar
            data={{
              labels: ["2017", "2018"],
              datasets: [
                {
                  data: [5826, 7410],
                  backgroundColor: [
                    pattern.draw("line", "#afbc4a"),
                    pattern.draw("line", "#008996")
                  ],
                  borderColor: ["#231f20", "#231f20"],
                  borderWidth: [1, 1]
                }
              ]
            }}
            options={{
              legend: { display: false },
              tooltips: { enabled: false },
              events: [],
              scales: {
                yAxes: [
                  {
                    display: false,
                    ticks: { beginAtZero: true, max: 8500 }
                  }
                ],
                xAxes: [
                  {
                    barThickness: 72,
                    categoryPercentage: 0.74,
                    ticks: { fontColor: "#008996", fontFamily: "Josefin Sans", fontSize: 16 },
                    gridLines: {
                      display: false,
                      color: "rgba(0, 0, 0, 1)"
                    }
                  }
                ]
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
                      ctx.fillText(
                        `${data.toString().slice(0, 1)},${data
                          .toString()
                          .slice(1, 4)}`,
                        bar._model.x,
                        bar._model.y - 5
                      );
                    });
                  });
                }
              }
            }}
            height={260}
          />
        ) : (
          <div className="placeholder" />
        )}
        <VisibilitySensor
          onChange={isVisible => this.setState({ isVisible })}
        />
      </div>
    );
  }
}

export default RoselandOperating;
