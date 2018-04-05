import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashPage from './components/SplashPage.jsx';
import AboutUs from './components/AboutUs.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/aboutus' component={AboutUs} />
        </Switch>
      </div>
      </HashRouter>
    );
  }
}

export default App;
