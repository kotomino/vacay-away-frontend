import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          
        </Switch>
    </Router>
    );
  }
}

export default App;
