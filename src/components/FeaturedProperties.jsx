import React from 'react';
import Navbar from './Navbar'
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/FeaturedProperties.css'


class FeaturedProperties extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className='construction-container'>
          FeaturedProperties <p>COMING SOON!</p>
        </div>
      </main>
    )
  }

}



export default FeaturedProperties
