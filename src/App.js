import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getVacations } from './actions/vacations';
import { getActivities } from './actions/activities';
import Home from './components/Home';
import ErrorPage from './components/Error';
import Layout from './components/Layout'
import VacationList from './components/vacations/VacationList';
import VacationForm from './components/vacations/VacationForm';
import VacationShow from './components/vacations/VacationShow';
import ActivityForm from './components/activities/ActivityForm'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E7E7E5'
    },
    secondary: {
      main: '#f50057'
    },
    text: {
      primary: "#22293D",
      secondary: '#e6e6e6'
    }
  }, 
  typography: {
    fontFamily: 'Caveat',
    fontWeightLight: 400,
    fontWeightRegular: 700,
    fontWeightMedium: 600,
    fontWeightBold: 700,
   
  }
})

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
      <ThemeProvider theme={theme} >
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component= { Home } />
              <Route exact path="/vacations" component={ VacationList } />
              <Route exact path="/vacations/new" component={ VacationForm } />
              <Route exact path="/vacations/:vacationId" component={ VacationShow } />
              <Route exact path="/vacations/:vacationId/activities/new" component={ ActivityForm } />
              <Route component={ ErrorPage } />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getVacations, getActivities })(App);
