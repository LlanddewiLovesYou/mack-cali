import React from 'react';
import '../assets/stylesheets/SplashPage.css';
import Navbar from './Navbar'
import splashImage from '../assets/images/splashimage.jpg'
import arrow from '../assets/images/arrow.png'

class SplashPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Navbar />
        <div className='splash-image-container'>
          <img class='splash-image' src={splashImage}/>
          <div className='read-stockholders'>READ STOCKHOLDER'S LETTER
            <img className='arrow' src={arrow}/>
          </div>
        </div>
      </main>
    )
  }

}

export default SplashPage;
