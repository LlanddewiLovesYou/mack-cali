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
import MenuIcon from "../assets/images/menu.svg";
import "../assets/stylesheets/Navbar.css";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
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
                  className="nav-link"
                  activeClassName="active"
                  to="/Downloads"
                >
                  Downloads
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </nav>
    );
  }
}

export default MyNavbar;
