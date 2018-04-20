import React from "react";
import "../assets/stylesheets/navtest.css";
import Logo from "../assets/images/mack-cali.png";
import annualReport from "../assets/images/Mack-Cali_Cover.jpg";
import form10k from "../assets/images/Mack-Cali_10K.jpg";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadsOpen: false
    };
  }

  downloadToggle() {
    if (this.state.downloadsOpen === false) {
      this.setState({ downloadsOpen: true });
    } else {
      this.setState({ downloadsOpen: false });
    }
  }

  render() {
    return (
      <main>
        <img src={Logo} id="mack-logo" />
        <div className='navlink-container'>
          <div id='annual-report-2017' className='visible-xl'>2017 ANNUAL REPORT</div>
          <ul className='navlinks'>
            <li>
              <NavLink
                className='inactive navlink-item'
                activeClassName='active'
                to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                className="inactive navlink-item"
                activeClassName="active"
                to="/AboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inactive navlink-item"
                activeClassName="active"
                to="/YearEndHighlights"
              >
                Year-end Highlights
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inactive navlink-item"
                activeClassName="active"
                to="/Stockholders"
              >
                Stockholders&#39; letter
              </NavLink>
            </li>
            <li>
              <NavLink
                className="inactive navlink-item"
                activeClassName="active"
                to="/FeaturedProperties"
              >
                Featured Properties
              </NavLink>
            </li>
            <li  className="navlink-item" onClick={() => this.downloadToggle()}>Downloads</li>
          </ul>
        </div>
        {this.state.downloadsOpen ? (
          <ul className="download-nav">
            <li className="download-flex">
              <a href="#">
                <img className="download-img" src={annualReport} />
                <div>2017 ANNUAL REPORT</div>
              </a>
            </li>
            <li className="download-flex">
              <a href="#">
                <img className="download-img" src={form10k} />
                <div>Form 10-K</div>
              </a>
            </li>
          </ul>
        ) : null}
      </main>
    )
  }


}

export default NavBar;
