import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getVacations } from './actions/vacations';
import { getActivities } from './actions/activities';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ErrorPage from './components/Error';
import VacationList from './components/vacations/VacationList';
import VacationForm from './components/vacations/VacationForm';

class App extends Component {

  componentDidMount() {
    this.props.getVacations();
    this.props.getActivities();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route exact path="/vacations" component={ VacationList } />
          <Route exact path="/vacations/new" component={ VacationForm } />
          <Route component={ ErrorPage } />
        </Switch>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getVacations, getActivities })(App);
