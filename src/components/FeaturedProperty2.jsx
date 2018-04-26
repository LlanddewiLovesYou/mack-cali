import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
// import '../assets/stylesheets/FeaturedProperty2.css';
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
      <div className='d-flex flex-column-reverse flex-md-row'>
      <div className='property2-copy-container light-copy col-md-3'>
        <div className='property-title'>PORT IMPERIAL</div>
        <div className='property-subtitle'>WEEHAWKEN, NEW JERSEY</div>
        <div className='property-copy'>
          <p>For three decades, Roseland, a subsidiary of Mack-Cali, has played an
          integral role in the creation of the Port Imperial neighborhood, and
          the revitalization of the Hudson River waterfront in Weehawken and
          West New York. As part of a $2-billion, 200-acre master-planned
          development, Roseland has brought more than 2,600 apartments to
          market at Port Imperial, and has more than 2,000 apartments in the
          pipeline.</p>
        <p>
          Now is the opportunity to elevate Port Imperial’s profile as a premier
          destination for renters who value the rare combination of luxury living,
          dining and retail, world-class views of Manhattan, convenient transportation
          access, and open space that is difficult to find in the New York
          Metropolitan Area.</p>
        </div>
      </div>
      <main className='property-component background-2 col-md-9'>

        <div>


            <div className={bubbleClass} id='orange2'>
              <div className='bubble-bold'>Weehawken</div><div className='bubble-bold'>Ranked #1</div>Amongst Best Places to Raise <br/> a Family in Hudson County
              <br/><br/>&mdash;Niche Media<br/>2018 Best Places
            </div>
            <div className={bubbleClass} id='purple2'>
              <div className='bubble-bold'>Roseland has<br/>more than 2,000<br/>apartment units<br/>in the pipeline.</div>
            </div>
            <div className={bubbleClass} id='aqua2'>
              West New York Earns<div className='bubble-bold'>Walk Score: 94</div>&mdash;Walk Score
            </div>

        </div>
      </main>
    </div>
    )
  }

  }



export default FeaturedProperty2
