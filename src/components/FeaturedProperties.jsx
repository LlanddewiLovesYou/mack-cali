import React from 'react';
import Navbar from './Navbar';
import graphConstruction from '../assets/images/graphconstruction.png';
import '../assets/stylesheets/FeaturedProperties.css';
import Carousel from 'nuka-carousel';
import FeaturedProperty1 from './FeaturedProperty1';
import FeaturedProperty2 from './FeaturedProperty2';
import FeaturedProperty3 from './FeaturedProperty3';


class FeaturedProperties extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main style={{width: '100vw', height: '90vh'}}>
        <Carousel style={{width: '100vw', height: '90vh'}} id='carousel'>
          <FeaturedProperty1 className='property-component' />
          <FeaturedProperty2 className='property-component' />
          <FeaturedProperty3 className='property-component' />
        </Carousel>
      </main>
    )
  }

}



export default FeaturedProperties
// <div>1</div>
// <div>2</div>
// <div>3</div>
