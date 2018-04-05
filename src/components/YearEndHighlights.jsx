import React from 'react';
import Navbar from './Navbar'
import graphConstruction from '../assets/images/graphconstruction.png'
import '../assets/stylesheets/YearEndHighlight.css'


class YearEndHighlights extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className='construction-container'>
          <img src={graphConstruction} className='construction-image'></img>
        </div>
      </main>
    )
  }

}



export default YearEndHighlights
