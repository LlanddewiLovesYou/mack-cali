import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
import '../assets/stylesheets/FeaturedProperty2.css';
import Carousel from 'nuka-carousel';
import property2 from '../assets/images/property2.png';

class FeaturedProperty2 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let bubbleClass = 'bubble'
    if (this.props.slideIdx === this.props.currentSlide) {
      bubbleClass = 'bubble animated zoomIn'
    }
    return (
      <main className='property-component background-2'>

        <div>

            <div className='property2-copy-container light-copy'>
              <div className='property-title'>PORT IMPERIAL</div>
              <div className='property-subtitle'>WEEHAWKEN, NEW JERSEY</div>
              <div className='property-copy'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div className='property-number'>3,256units<span className='sq-ft'>Completed</span></div>
            </div>

            <div className={bubbleClass} id='orange2'>
              Weehawken<br/>Ranked #1<br/>best places to raise a<br/>family in Hudson County
              <br/><br/>Source: Niche Media<br/>2018 Best Places
            </div>
            <div className={bubbleClass} id='purple2'>
              Jersey City<br/>Ranks 5th<br/>for best public<br/>transportation in the U.S.<br/>--Business Insider
            </div>
            <div className={bubbleClass} id='aqua2'>
              West New York Earns<br/>Walk Score: 94<br/><br/>Source: Walk Score
            </div>

        </div>
      </main>
    )
  }

  }



export default FeaturedProperty2
