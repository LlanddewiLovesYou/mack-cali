import React from 'react';
import Navbar from './Navbar';
import '../assets/stylesheets/Stockholders.css';
import micheal from '../assets/images/micheal.png';
import marshall from '../assets/images/marshall.png';
import uparrow from '../assets/images/uparrow.png';
import seventeen from '../assets/images/seventeen.png';
import fiftyeight from '../assets/images/fiftyeight.png';



class Stockholders extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <Navbar />
          <summary className='stockholder-container'>
            <div id='stockholder-greeting'>
              To Our Stockholders:
            </div>



            <p id='first-paragraph'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br/>
            <div className='signature-container'>
              <div className='signature' id='sig-1'>
                <img src={micheal}/>
                <div>Micheal J. Demarco</div><br/>Cheif Executive Officer
              </div>
              <div className='signature' id='sig-2'>
                <img src={marshall}/>
                <div>Marshall B. Tycher</div><br/>Chairman of Roseland<br/>Residential Trust
              </div>
            </div>
            <div className='sig-date'>April XX, 2018</div>
          </summary>
          <img id='seventeen' src={seventeen}/>
          <img id='fiftyeight' src={fiftyeight}/>
      </main>
    )
  }

}



export default Stockholders

// <div className='stockholder-stats-container' id='stats-1'>
//   <div className='stat-number'>$58m</div>
//   <div id='by-2018'>by 2018</div>
//   <hr></hr>
//   <div className='stats-title'>Title Here</div>
//   <div className='stats-copy'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//   eiusmod tempor incididunt.</div>
// </div>
// <div className='stockholder-stats-container' id='stats-2'>
//   <div className='stat-number'><img src={uparrow}/>17.5%</div>
//   <hr></hr>
//   <div className='stats-title'>Title Here</div>
//   <div className='stats-copy'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//   eiusmod tempor incididunt.</div>
// </div>
