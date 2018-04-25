import React from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/mack-cali.png";
import annualReport from "../assets/images/Mack-Cali_Cover.jpg";
import report from "../assets/images/187054_L01_Mack-Cali_2017AR.pdf";
import form10k from "../assets/images/Mack-Cali_10K.jpg";
import f10k from "../assets/images/187054_L01_FIN.pdf";
import MenuIcon from "../assets/images/menu.svg";
import "../assets/stylesheets/Navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.downloads = this.downloads.bind(this);
    this.state = {
      isOpen: false,
      downloads: false
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  downloads(e) {
    e.preventDefault();
    this.setState({ downloads: !this.state.downloads });
  }

  render() {
    return (
      <nav>
        <img src={Logo} id="mack-logo" />
        <Navbar className="custom-nav" expand="lg">
          <NavbarBrand id="annual-link">
            2017 ANNUAL REPORT
          </NavbarBrand>
          <NavbarToggler id="menu-icon" onClick={this.toggle}>
            <img src={MenuIcon} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{ width: "100%" }} className="flex-column flex-md-row">
              <NavItem className="flex-md-fill text-md-center" onClick={this.toggle}>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center" onClick={this.toggle}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/AboutUs"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center" onClick={this.toggle}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/YearEndHighlights"
                >
                  Year-end Highlights
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center" onClick={this.toggle}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Stockholders"
                >
                  Stockholders&#39; Letter
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center" onClick={this.toggle}>
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/FeaturedProperties"
                >
                  Featured Properties
                </NavLink>
              </NavItem>
              <NavItem className="flex-sm-fill text-md-center" onClick={this.toggle}>
                <NavLink
                  className={`${this.state.downloads ? "active" : ""} nav-link`}
                  activeClassName="active"
                  to="/downloads"
                  onClick={this.downloads}
                >
                  Downloads
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.downloads ? (
          <section className="downloads">
            <ul
              style={{ margin: 0 }}
              className="download-nav row justify-content-center"
            >
              <a className="col-6 col-sm-4 col-lg-2" href={report} target='_blank'>
                <li className="download-flex">
                  <img className="download-img" src={annualReport} />
                  <div className='download-labels'>2017 <br/>ANNUAL REPORT</div>
                </li>
              </a>
              <a className="col-6 col-sm-4 col-lg-2" href={f10k} target='_blank'>
                <li className="download-flex">
                  <img className="download-img" src={form10k} />
                  <div className='download-labels'>Form 10-K</div>
                </li>
              </a>
            </ul>
          </section>
        ) : null}
      </nav>
    );
  }
}

export default MyNavbar;
