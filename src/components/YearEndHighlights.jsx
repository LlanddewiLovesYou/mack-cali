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

class YearEndHighlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="yearend-graphs-container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 yearend-title">
            Year End Highlights
          </div>
        </div>
        <div className="row">
          <div className="container">
            <OfficeBaseRent />
            <GAAPRoll />
            <CompletedSales />
          </div>
        </div>
        <div className="row">
          <hr className="col-md-10 col-md-offset-1 hr" />
        </div>
        <div className="row">
          <div className="col-md-12 donut-heading">
            Increased Portfolio Composition<sup>1</sup>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <Dough2015 />
            <Dough2016 />
            <Dough2017 />
          </div>
        </div>
        <div className="row">
          <DoughLegend />
          <div classname="col-md-8" id="footnote">
            <sup>1</sup>Based on the pro rata proportions of Property Net
            Operating Income contribution across portfolio.
          </div>
        </div>

        <div className="row">
          <hr className="col-md-10 col-md-offset-1 hr" />
        </div>
        <div className="row">
          <RoselandOperating />
          <div className="col-md-2" />
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
