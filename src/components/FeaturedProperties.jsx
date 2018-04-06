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
      <main>
        <Navbar />
        <div>
          <Carousel className='carousel'>
            <FeaturedProperty1 />
            <FeaturedProperty2 />
            <FeaturedProperty3 />
          </Carousel>
        </div>
      </main>
    )
  }

}



export default FeaturedProperties
