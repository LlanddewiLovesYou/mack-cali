import React from "react";
import "../assets/stylesheets/Navbar.css";
import Logo from "../assets/images/mack-cali.png";
import annualReport from "../assets/images/Mack-Cali_Cover.jpg";
import form10k from "../assets/images/Mack-Cali_10K.jpg";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class MyNavbar extends React.Component {
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
        <div className="navbar ian-nav">
          <div id="test" className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#collapse-menu"
            >
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div id="collapse-menu" className="navbar-collapse collapse">
            <ul id="navbar-links" className="nav navbar-nav">
              <li>
                <div to="/" id="annual-link">
                  2017 ANNUAL REPORT
                </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink
                  className="inactive"
                  activeClassName="active"
                  to="/AboutUs"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="inactive"
                  activeClassName="active"
                  to="/YearEndHighlights"
                >
                  Year-end Highlights
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="inactive"
                  activeClassName="active"
                  to="/Stockholders"
                >
                  Stockholders&#39; letter
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="inactive"
                  activeClassName="active"
                  to="/FeaturedProperties"
                >
                  Featured Properties
                </NavLink>
              </li>
              <li onClick={() => this.downloadToggle()}>Downloads</li>
            </ul>
          </div>
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
    );
  }
}

export default MyNavbar;

// (<div className='navbar' id='downloads-div'>
//     <div className='navbar-header'>
//       <a
//       className='navbar-toggle'
//       id='mobile-download-button'
//       data-toggle='collapse'
//       data-target='.navbar-collapse'
//       >
//       <div className='sr-only'>Toggle Navigation</div>
//         <div >Downloads</div>
//       </a>
//     </div>
//     <div className='navbar-collapse collapse'>

// } else {
//   return (
//     <main>
//       <img src={Logo} id='mack-logo'/>
//   <div className='container navbar ian-nav'>
//     <div id="test" className='navbar-header'>
//       <button type='button'
//       className='navbar-toggle'
//       data-toggle='collapse'
//       data-target='.navbar-collapse'
//       >
//       <span className='sr-only'>Toggle Navigation</span>
//       <span className='icon-bar'></span>
//       <span className='icon-bar'></span>
//       <span className='icon-bar'></span>
//       </button>
//     </div>
//     <div className='navbar-collapse collapse'>
//       <ul className='nav navbar-nav'>
//         <li><Link  to='/'  id='annual-link'>2017 ANNUAL REPORT</Link></li>
//         <li><NavLink activeClassName='active' to='/AboutUs'>About Us</NavLink></li>
//         <li><NavLink className='inactive' activeClassName='active' to='/YearEndHighlights'>Year-end Highlights</NavLink></li>
//         <li><NavLink className='inactive' activeClassName='active' to='/Stockholders'>Stockholders&#39; letter</NavLink></li>
//         <li><NavLink className='inactive' activeClassName='active' to='/FeaturedProperties'>Featured Properties</NavLink></li>
//         <li><a className='inactive' activeClassName='active' to='#' onClick={() => this.downloadToggle()}>Downloads</a></li>
//       </ul>
//     </div>
//   </div>
//   <div className='navbar' id='downloads-div'>
//     <div className='navbar-header'>
//       <a
//       className='navbar-toggle'
//       id='mobile-download-button'
//       data-toggle='collapse'
//       data-target='.navbar-collapse'
//       >
//       <div className='sr-only'>Toggle Navigation</div>
//         <div >Downloads</div>
//       </a>
//     </div>
//     <div className='navbar-collapse collapse'>
//       <ul className='nav navbar-nav'>
//         <li><a href='#'>2017 ANNUAL REPORT</a></li>
//         <li><a href='#'>2018 ANNUAL REPORT</a></li>
//       </ul>
//     </div>
//   </div>
// </main>
//   )
// }
