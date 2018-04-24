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
          2017 ANNUAL REPORT Weehawken Ranked #1 Best Places to Raise
          a Family in Hudson County Source: Niche Media 2018 Best Places
          West New York Earns Walk Score: 94 Source: Walk Score For three
          decades, Roseland, a subsidiary of Mack-Cali, has played an integral
          role in the creation of the Port Imperial neighborhood, and the
          revitalization of the Hudson River waterfront in Weehawken and
          West New York. As part of a $2-billion, 200-acre master-planned
          development, Roseland has brought more than 2,600 apartments to
          market at Port Imperial, and has more than 2,000 apartments in
          the pipeline.
          <br/>
          <br/>
          Now is the opportunity to elevate Port Imperial’s profile as a
          premier destination for renters who value the rare combination
          of luxury living, dining and retail, world-class views of Manhattan,
          convenient transportation access, and open space that is difficult
          to find in the New York Metropolitan Area.
        </div>
      </div>
      <main className='property-component background-2 col-md-9'>

        <div>


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
    </div>
    )
  }

  }



export default FeaturedProperty2
