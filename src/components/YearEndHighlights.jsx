import React from "react";
import piecelabel from "chart.piecelabel.js";
import "../assets/stylesheets/YearEndHighlight.css";
import graphConstruction from "../assets/images/graphconstruction.png";
import Navbar from "./Navbar";
import OfficeBaseRent from "./OfficeBaseRent";
import IncreasedRoselandInt from "./IncreasedRoselandInt";
import RoselandOperating from "./RoselandOperating";
import Dough2015 from "./Dough2015";
import Dough2016 from "./Dough2016";
import Dough2017 from "./Dough2017";
import DoughLegend from "./DoughLegend";
import GAAPRoll from "./GAAPRoll";
import CompletedSales from "./CompletedSales";
import "chart.piecelabel.js/build/Chart.PieceLabel.min.js";
import { Chart } from "react-chartjs-2";

Chart.defaults.global.animation.duration = 2000;


class YearEndHighlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="yearend-graphs-container">
        <div id="title-row" className="row d-flex align-items-center justify-content-center justify-content-sm-start">
          <div className="col-10 col-sm-9 offset-sm-2 yearend-title">
            Year-end Highlights
          </div>
        </div>
        <div className="row align-items-center flex-column flex-lg-row justify-content-lg-center">

          <OfficeBaseRent />
          <GAAPRoll />
          <CompletedSales />

        </div>
        <div className="row d-flex justify-content-center">
          <hr className="col-lg-8 hr" />
        </div>
        <div className="row">
          <div className="col-md-12 donut-heading">
            Improving Portfolio Composition<sup>1</sup>
          </div>
        </div>
        <div className="row flex-column align-items-center flex-lg-row justify-content-center">
          <Dough2015 />
          <Dough2016 />
          <Dough2017 />
        </div>
        <div className="row">
          <DoughLegend />
          <div className="col-md-8" id="footnote">
            <sup>1</sup>Based on the pro rata proportions of Property Net
              Operating Income contribution across the portfolio.
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <hr className="col-lg-8 hr" />
        </div>

        <div className="row flex-column align-items-center flex-lg-row justify-content-center">
          <RoselandOperating />
          <div className="col-1" />
          <IncreasedRoselandInt />
        </div>
      </main>
    );
  }
}

// <div className='col-md-1'>margin div md-1</div>
export default YearEndHighlights;
// <div className='col-md-1'>margin div md-1</div>
// <ResidentPortfolioGrow />

// <img src={graphConstruction} className='construction-image'></img>
