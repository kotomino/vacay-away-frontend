import React, { Component } from 'react'
import { connect } from 'react-redux';
import Vacation from './Vacation';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import { deleteVacation } from '../../actions/vacations';
import { deleteActivity } from '../../actions/activities';
import Typography from '@material-ui/core/Typography';


class VacationList extends Component {

  handleDelete = (vacationId, e) => {

    if(e.stopPropagation) e.stopPropagation(); // prevents call to parent onClick to Vacation show route, only deletes vacation

    /* Find array of activity ids to delete that have the vacation id as foreign key */ 
    const activitiesId = this.props.activities.filter(activity => activity.vacation.id === vacationId).map(activity => activity.id);

    activitiesId.forEach(activityId => this.deleteActivities(activityId)); //delete associated activities first

    this.deleteVacation(vacationId); //then delete the vacation selected 
    }
  

  deleteActivities = (activityId) => {
    this.props.deleteActivity(activityId)
  }

  deleteVacation = (vacationId) => {
    this.props.deleteVacation(vacationId);
  }

  render() {
    
    const vacations = this.props.vacations.map( (vacation, i) => <Vacation history={this.props.history} key={vacation.id} handleDelete={this.handleDelete} location={ vacation.location } start_date={ vacation.start_date } end_date={ vacation.end_date } budget={vacation.budget} vacation={vacation} />)

    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Typography variant="h3" gutterBottom color="primary" align="center">
              <strong>Upcoming Trips </strong>
            </Typography>
          </Grid>
          <Grid item xs={12} align="right">
            <Button variant="contained" color="secondary" size="large" href="/vacations/new" >
              Plan A New Trip
            </Button>
          </Grid>
          { vacations }
        </Grid><br/>
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

export default connect(mapStateToProps, { deleteVacation, deleteActivity })(VacationList)
