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
      <main className='property-component background-3'>

        <div className='property3-container'>


            <div className='property3-copy-container light-copy'>
              <div className='property-title'>SUBURBAN IMPROVEMENTS</div>
              <div className='property-copy'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>

        </div>
      </main>
    )
  }

}



export default FeaturedProperty3
