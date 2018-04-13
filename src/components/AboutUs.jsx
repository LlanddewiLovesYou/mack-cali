import React from 'react';
import '../assets/stylesheets/AboutUs.css';
import Navbar from './Navbar'
// import splashImage from '../assets/images/splashimage.jpg'
// import arrow from '../assets/images/arrow.png'

class AboutUs extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>

        <div className='about'>
          <div className='about-container'>
            <div className='row'>
              <div className='about-heading col-md-8 col-md-offset-2'>
                <div className='pipes' id='left-pipe'>|</div>
                MACK-CALI CORPORATION
                <div className='pipes' id='right-pipe'>|</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-8 col-xs-8 col-xs-offset-2'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="last-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          </div>
          </div>
        </div>
      </main>
    )
  }

}

export default AboutUs;
