import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
import '../assets/stylesheets/FeaturedProperty1.css';
import '../assets/stylesheets/FeaturedProperties.css';
import Carousel from 'nuka-carousel';
import property1 from '../assets/images/property1.png';


class FeaturedProperty1 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className='property-component background-1'>

          <div className='property1-copy-container'>
            <div className='property-title'>HARBORSIDE</div>
            <div className='property-subtitle'>MACK-CALI'S CORPORATE HEADQUARTERS<br/>JERSEY CITY, NEW JERSEY</div>
            <div className='property-copy'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='property-number'>4.3million<span className='sq-ft'>Sq. Ft.</span></div>
          </div>

          <div className='bubble' id='orange1'>
            The drastically transformed<br/>promanade tatsefully combines<br/>multiuse communal
            spaces,<br/>collaborative lounges and a<br/>stylish floating stage designated<br/>
            for events on the water.
          </div>
          <div className='bubble' id='purple1'>
            Jersey City<br/>Ranks 5th<br/>for best public<br/>transportation in the U.S.<br/>--Business Insider
          </div>
          <div className='bubble' id='green1'>
            The extended promanade<br/>offers waterfront dining and retail<br/>options, designated areas
            for<br/>events, pop-ups and programming,<br/>and mutiple viewing points<br/>with spectacular unobstructed<br/>views
            of New York City.
          </div>
          <div className='bubble' id='aqua1'>
            With all-new infrastructure,<br/>superior connectivity<br/>comprehensive updates inside<br/>
          and out. Harborside<br/>best-in-class working
          </div>


      </main>
    )
  }

  }


export default FeaturedProperty1