import React, { Component } from 'react';
import Logo from "./assets/images/mack-cali.png"
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Logo} id='mack-logo'/>
          <Navbar />


      </div>
    );
  }
}

export default App;
