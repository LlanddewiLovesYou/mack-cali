import React from 'react';
import '../assets/stylesheets/Navbar.css'
import Logo from "../assets/images/mack-cali.png"
import { Link, NavLink, Switch, Route } from 'react-router-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      downloadsOpen: false
    }
  }

  downloadToggle(){
    if (this.state.downloadsOpen === false) {
      this.setState({downloadsOpen: true})
    } else {
      this.setState({downloadsOpen: false})
    }
  }

  render() {
    if (this.state.downloadsOpen === false) {
      return (
        <main>
        <img src={Logo} id='mack-logo'/>
      <div className='container navbar navbar-default ian-nav'>
        <div id="test" className='navbar-header'>
          <button type='button'
          className='navbar-toggle'
          data-toggle='collapse'
          data-target='.navbar-collapse'
          >
          <span className='sr-only'>Toggle Navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          </button>
        </div>
        <div className='navbar-collapse collapse'>
          <ul id="navbar-links" className='nav navbar-nav'>
            <li><Link  to='/'  id='annual-link'>2017 ANNUAL REPORT</Link></li>
            <li><NavLink activeClassName='active' to='/AboutUs'>About Us</NavLink></li>
            <li><NavLink className='inactive' activeClassName='active' to='/YearEndHighlights'>Year-end Highlights</NavLink></li>
            <li><NavLink className='inactive' activeClassName='active' to='/Stockholders'>Stockholders&#39; letter</NavLink></li>
            <li><NavLink className='inactive' activeClassName='active' to='/FeaturedProperties'>Featured Properties</NavLink></li>
            <li><NavLink className='inactive' activeClassName='active' to='#' onClick={() => this.downloadToggle()}>Downloads</NavLink></li>
          </ul>
        </div>
      </div>
    </main>
      )
    } else {
      return (
        <main>
          <img src={Logo} id='mack-logo'/>
      <div className='container navbar navbar-default ian-nav'>
        <div id="test" className='navbar-header'>
          <button type='button'
          className='navbar-toggle'
          data-toggle='collapse'
          data-target='.navbar-collapse'
          >
          <span className='sr-only'>Toggle Navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          </button>
        </div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><a  id='annual-link' href='#'>2017 ANNUAL REPORT</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Year-end Highlights</a></li>
            <li><a href='#'>Stockholders&#39; letter</a></li>
            <li><a href='#'>Featured Properties</a></li>
            <li><a onClick={() => this.downloadToggle()} href='#'>Downloads</a></li>
          </ul>
        </div>
      </div>
      <div className='navbar navbar-default' id='downloads-div'>
        <div className='navbar-header'>
          <a
          className='navbar-toggle'
          id='mobile-download-button'
          data-toggle='collapse'
          data-target='.navbar-collapse'
          >
          <div className='sr-only'>Toggle Navigation</div>
            <div >Downloads</div>
          </a>
        </div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><a href='#'>2017 ANNUAL REPORT</a></li>
            <li><a href='#'>2018 ANNUAL REPORT</a></li>
          </ul>
        </div>
      </div>
    </main>
      )
    }

  }

}

export default Navbar;
