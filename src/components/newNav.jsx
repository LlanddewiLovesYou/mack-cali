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
import form10k from "../assets/images/Mack-Cali_10K.jpg";
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
        <Navbar className="custom-nav" expand="md">
          <NavbarBrand id="annual-link" style={{ marginLeft: "50px" }}>
            2017 ANNUAL REPORT
          </NavbarBrand>
          <NavbarToggler id="menu-icon" onClick={this.toggle}>
            <img src={MenuIcon} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{ width: "100%" }} className="flex-column flex-md-row">
              <NavItem className="flex-md-fill text-md-center">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/AboutUs"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/YearEndHighlights"
                >
                  Year-end Highlights
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Stockholders"
                >
                  Stockholders&#39; letter
                </NavLink>
              </NavItem>
              <NavItem className="flex-md-fill text-md-center">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/FeaturedProperties"
                >
                  Featured Properties
                </NavLink>
              </NavItem>
              <NavItem className="flex-sm-fill text-md-center">
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
              <a className="col-6 col-sm-4 col-lg-2" href="#">
                <li className="download-flex">
                  <img className="download-img" src={annualReport} />
                  <div>2017 ANNUAL REPORT</div>
                </li>
              </a>
              <a className="col-6 col-sm-4 col-lg-2" href="#">
                <li className="download-flex">
                  <img className="download-img" src={form10k} />
                  <div>Form 10-K</div>
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
