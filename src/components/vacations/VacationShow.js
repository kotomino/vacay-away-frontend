import React, { Component } from 'react'
import { connect } from 'react-redux';
import VacationHeader from './VacationHeader'
import ActivityList from '../activities/ActivityList'
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import VacationSchedule from './VacationSchedule';
import { getActivities, updateActivityDay } from '../../actions/activities';

class VacationShow extends Component {

  componentDidMount() {
    this.props.getActivities();
  }

  handleUpdate = (day, activity) => {
    const newActivity = {
      ...activity, 
      day: day,
      vacation_id: activity.vacation.id
    }
    
    this.props.updateActivityDay(newActivity, this.props.history); //update backend data
  }

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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VacationHeader key={vacation.id} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation} />
          </Grid>
          <Grid item xs={12}>
            <VacationSchedule numOfDays={numOfDays} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation} activities={this.props.activities} handleUpdate={this.handleUpdate} />
          </Grid>
          <Grid item xs={12}>
            <ActivityList key={vacation.id} vacation={vacation} numOfDays={numOfDays} vacation={vacation} handleUpdate={this.handleUpdate} /><br/>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    vacations: state.vacations.vacations,
    activities: state.activities.activities
  }
  
}

export default connect(mapStateToProps, { getActivities, updateActivityDay })(VacationShow)
