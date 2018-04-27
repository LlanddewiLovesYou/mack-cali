import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
// import '../assets/stylesheets/FeaturedProperty3.css';
import Carousel from 'nuka-carousel';
import property3 from '../assets/images/property3.png';

class FeaturedProperty3 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='d-flex flex-column-reverse flex-md-row'>
      <div className='property3-copy-container light-copy col-md-3'>
        <div id='suburban-title' className='property-title'>SUBURBAN IMPROVEMENTS</div>

        <div className='property-copy'>
          <p>
            Two years ago, we made a commitment to significantly upgrade several
            of our core office properties—ones that we consider prime opportunities
            in transit-oriented markets. We upgraded every touchpoint of the tenant
            experience—from what they see when they first walk into the building’s
            lobby, to where and what they eat for lunch, and how they work out
            in the afternoon.
          </p>
          <p>
            This capital improvement initiative involved a comprehensive renovation
            of building exteriors, installation of state-of-the-art amenities, and
            modernization of common areas in properties throughout Metropark, Short
            Hills, Red Bank, and Parsippany.
          </p>
        </div>
      </div>
      <main className='property-component background-3 col-md-9'>

        <div className='property3-container'>



        </div>
      </main>
    </div>
    )
  }

}



export default FeaturedProperty3
