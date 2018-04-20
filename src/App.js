import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import SplashPage from './components/SplashPage.jsx';
import AboutUs from './components/AboutUs.jsx';
import Stockholders from './components/Stockholders.jsx';
import YearEndHighlights from './components/YearEndHighlights.jsx';
import FeaturedProperties from './components/FeaturedProperties.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/Stockholders' component={Stockholders} />
          <Route exact path='/YearEndHighlights' component={YearEndHighlights} />
          <Route exact path='/FeaturedProperties' component={FeaturedProperties} />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
