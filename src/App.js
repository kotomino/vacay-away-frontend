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
    secondary: '#1E4744'
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,

  }
}})

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
