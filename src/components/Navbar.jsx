import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
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
            <li><a href='#'>2017 Annual Report</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Year-end Highlights</a></li>
            <li><a href='#'>Stockholders&#39; letter</a></li>
            <li><a href='#'>Featured Properties</a></li>
            <li><a href='#'>Downloads</a></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Navbar;
