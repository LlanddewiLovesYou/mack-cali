import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
// import '../assets/stylesheets/FeaturedProperty1.css';
import '../assets/stylesheets/FeaturedProperties.css';
import Carousel from 'nuka-carousel';
import property1 from '../assets/images/property1.png';


class FeaturedProperty1 extends React.Component {

  constructor(props) {
    super(props)
    const bubbleArray = document.getElementsByClassName('bubble')
    this.state = {
      animation: true
    }
  }

  componentDidMount() {
    // const bubbleArray = document.getElementsByClassName('bubble')

  }

  render() {
    let bubbleClass = 'bubble hidden-md-down'
    if (this.props.slideIdx === this.props.currentSlide) {
      bubbleClass = 'bubble animated zoomIn hidden-md-down'
    }
    return (
      <div className='d-flex flex-column-reverse flex-md-row'>
      <div className='property1-copy-container'>
        <div className='property-title'>HARBORSIDE</div>
        <div className='property-subtitle'>MACK-CALI'S CORPORATE HEADQUARTERS:<br/>JERSEY CITY, NEW JERSEY</div>
        <div className='property-copy'>
          Harborside reshapes the way our work days unfold. With landmark destination
          offices, collaborative lounges, boutique shopping, world-class dining
          and an ever-changing social landscape, it brings endless possibilities
          to every moment, and all against a backdrop of New York City views.
          Spanning 4.3 million square feet of office and retail space, and with
          another 1.1 million square feet planned, Harborside and its six state-of-the-art
          class A buildings underscore the distinctive character of the Jersey City
          waterfront—an unrivaled destination.
        </div>

      </div>
      <main className='property-component background-1 col-md-9'>


          <div className={bubbleClass} id='orange1'>
            The dramatically transformed<br/>promenade tastefully combines<br/>multi-use
            communal spaces,<br/>collaborative lounges and a<br/>stylish floating stage<br/>
            designated for events on the water.
          </div>
          <div className={bubbleClass} id='purple1'>
            Jersey City<strong className='bubble-bold'>Ranks 5th</strong>for best public<br/>transportation in the U.S.<br/>&mdash;Business Insider
          </div>
          <div className={bubbleClass} id='green1'>
            The extended promenade<br/>offers waterfront dining and retail<br/>options,
            designated areas for<br/>events, pop-ups and programming,<br/>and multiple
            viewing points<br/>with spectacular unobstructed<br/>views of New York City.
          </div>
          <div className={bubbleClass} id='aqua1'>
            With all-new infrastructure,<br/>superior connectivity and<br/>comprehensive
            updates inside<br/>and out, Harborside represents a<br/>best-in-class working
            community.
          </div>


      </main>
    </div>
    )
  }

  }


export default FeaturedProperty1
