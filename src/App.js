import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Navbar from "./components/newNav.jsx";
import SplashPage from "./components/SplashPage.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Stockholders from "./components/Stockholders.jsx";
import YearEndHighlights from "./components/YearEndHighlights.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import Footer from "./components/Footer.jsx";
import annualReport from "./assets/images/Mack-Cali_Cover.jpg";
import report from "./assets/images/187054_L01_Mack-Cali_2017AR.pdf";
import form10k from "./assets/images/Mack-Cali_10K.jpg";
import f10k from "./assets/images/187054_L01_FIN.pdf";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/home" component={SplashPage} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Stockholders" component={Stockholders} />
            <Route
              exact
              path="/YearEndHighlights"
              component={YearEndHighlights}
            />
            <Route
              exact
              path="/FeaturedProperties"
              component={FeaturedProperties}
            />
          <Route
            exact
            path="/Downloads"
            component={Downloads}
            />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;


const Downloads = () => (
  <section className="downloads">
    <div
      style={{ margin: 0, padding: 0 }}
      className="download-nav row d-flex flex-column flex-sm-row justify-content-center align-items-center"
    >
      <a className="col-6 col-sm-4" href={report} target='_blank'>
        <div className="download-flex">
          <img className="download-img" src={annualReport} />
          <div className='download-labels'>2017 Annual Report</div>
        </div>
      </a>
      <a className="col-6 col-sm-4" href={f10k} target='_blank'>
        <div className="download-flex">
          <img className="download-img" src={form10k} />
          <div className='download-labels'>Form 10-K</div>
        </div>
      </a>
    </div>
  </section>
)
