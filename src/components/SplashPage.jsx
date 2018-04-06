import React from 'react';
import '../assets/stylesheets/SplashPage.css';
import Navbar from './Navbar';
import splashImage from '../assets/images/splashimage.jpg';
import arrow from '../assets/images/arrow.png';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
    
        <Link to='/Stockholders'><div className='splash-image-container'>
          <img className='splash-image' src={splashImage}/>
          <div className='read-stockholders'>READ STOCKHOLDER'S LETTER
            <img className='arrow' src={arrow}/>
          </div>
        </div></Link>
      </main>
    )
  }

}

export default SplashPage;
