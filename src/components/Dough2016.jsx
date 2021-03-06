import React from "react";
import graphConstruction from "../assets/images/graphconstruction.png";
import "../assets/stylesheets/YearEndHighlight.css";
import { Doughnut } from "react-chartjs-2";
import piecelabel from "chart.piecelabel.js";
import VisibilitySensor from "react-visibility-sensor";

// import Navbar from './Navbar'
// import OfficeBaseRent from './OfficeBaseRent'
// import IncreasedRoselandInt from './IncreasedRoselandInt'
// import ResidentPortfolioGrow from './ResidentPortfolioGrow'

class Dough2016 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  render() {
    return (
      <div className="col-lg-3 box chart-margin">
        {this.state.isVisible ? (
          <Doughnut
            data={{
              labels: [
                "Waterfront",
                "Class A Suburban",
                "Suburban",
                "Flex",
                "Residential"
              ],
              datasets: [
                {
                  data: [30, 7, 38, 14, 11],
                  backgroundColor: [
                    "#231f20",
                    "#008996",
                    "#afbc4a",
                    "#c7cf8a",
                    "#a7a9ac"
                  ]
                }
              ]
            }}
            options={{
              layout: {
                padding: {
                  top: 0,
                  bottom: 0,
                  left: 10,
                  right: 10
                }
              },
              plugins: [piecelabel],
              cutoutPercentage: 65,
              legend: { display: false },
              responsive: false,
              tooltips: { enabled: false },
              events: [],
              pieceLabel: {
                render: "percentage",
                fontColor: "white",
                precision: 0,
                fontSize: 16,
                fontFamily: '"Josefin Sans"'
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
                  ctx.arc(x, y, 90, 0, 2 * Math.PI);
                  ctx.fillStyle = "#DAF1F2";
                  ctx.fill();
                  ctx.fillStyle = "#008996";
                  ctx.fillText("2016", x, y);
                }
              }
            }}
            height={300}
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

export default Dough2016;
