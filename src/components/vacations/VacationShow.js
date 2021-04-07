import React, { Component } from 'react'
import { connect } from 'react-redux';
import VacationHeader from './VacationHeader'
import ActivityList from '../activities/ActivityList'
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import VacationSchedule from './VacationSchedule';

class VacationShow extends Component {
  render() {
    const vacation = this.props.vacations.find(vacation => vacation.id === parseInt(this.props.match.params.vacationId))

    if (!vacation) {
          return (
            <h3>Loading...</h3>
          )
        }

    const date1 = new Date(vacation.start_date);
    const date2 = new Date(vacation.end_date);
    const diffTime = Math.abs(date2 - date1);
    const numOfDays = Math.ceil( 1 + (diffTime / (1000 * 60 * 60 * 24))); 
    
    return (
      <Container>
        <Grid container>
        <VacationHeader key={vacation.id} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation} />
        </Grid>
        <br />
        <VacationSchedule numOfDays={numOfDays} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation}/>
        <Grid item xs={12} align="right">
          <Button align="right" variant="contained" color="secondary" size="large" href={`/vacations/${vacation.id}/activities/new`}>
            Add Activity
          </Button>
        </Grid>
        <ActivityList key={vacation.id} vacation={vacation} /><br/>
        
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    vacations: state.vacations.vacations
  }
  
}

export default connect(mapStateToProps)(VacationShow)
