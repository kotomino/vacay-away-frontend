import React, { Component } from 'react'
import { connect } from 'react-redux';
import Activity from './Activity';
import { deleteActivity } from '../../actions/activities';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


class ActivityList extends Component {

  handleDelete = id => {
    this.props.deleteActivity(id)
  }
  
  render() {
    const relevantActivities = this.props.activities.filter(activity => activity.vacation.id === this.props.vacation.id && activity.day === "Undecided")
   
    const activities = relevantActivities.map( (activity, i) => <Activity key={i} handleUpdate={this.props.handleUpdate} numOfDays={this.props.numOfDays} activity={activity} handleDelete={this.handleDelete} name={activity.name} address={activity.address} cost={activity.cost} notes={activity.notes} 
    mondayOpen={activity.monday_open} mondayClose={activity.monday_close} 
    tuesdayOpen={activity.tuesday_open} tuesdayClose={activity.tuesday_close} 
    wednesdayOpen={activity.wednesday_open} wednesdayClose={activity.wednesday_close}  
    thursdayOpen={activity.thursday_open} thursdayClose={activity.thursday_close}  
    fridayOpen={activity.friday_open} fridayClose={activity.friday_close}  
    saturdayOpen={activity.saturday_open} saturdayClose={activity.saturday_close}  
    sundayOpen={activity.sunday_open} sundayClose={activity.sunday_close} />)
    
    return (
      <div>
          <Grid item xs={12}>
            <Typography variant="h5" color="textPrimary"><strong>Activities With Undecided Days </strong></Typography>
          </Grid>
          <Grid container container wrap='nowrap' spacing={2} className="activitySlider">
            { activities } 
            
          </Grid>
          <Grid item xs={2} align="right">
            <Button align="right" variant="contained" color="secondary" size="large" href={`/vacations/${this.props.vacation.id}/activities/new`}>
            Add Activity
            </Button>
          </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities.activities
  }
}

export default connect(mapStateToProps, { deleteActivity })(ActivityList)
