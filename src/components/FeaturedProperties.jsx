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
    this.state ={
      slideIndex: 0
    }
  }

  render() {
    return (
      <main style={{width: '100vw', height: '90vh'}}>
        <Carousel
          style={{width: '100vw', height: '90vh'}}
          id='carousel'
          slideIndex={this.state.slideIndex}
          afterSlide={(slideIndex) => this.setState({slideIndex})}
          >
          <FeaturedProperty1
            currentSlide={this.state.slideIndex}
            slideIdx={0}
            className='property-component' />
          <FeaturedProperty2
            currentSlide={this.state.slideIndex}
            slideIdx={1}
            className='property-component' />
          <FeaturedProperty3
            currentSlide={this.state.slideIndex}
            slideIdx={2}
            className='property-component' />
        </Carousel>
      </main>
    )
  }

}



export default FeaturedProperties
// <div>1</div>
// <div>2</div>
// <div>3</div>