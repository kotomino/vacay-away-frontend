import React, { Component } from 'react'
import { connect } from 'react-redux';
import Activity from './Activity';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


class ActivityList extends Component {
  
  render() {
    const relevantActivities = this.props.activities.filter(activity => activity.vacation.id === this.props.vacation.id)
   
    const activities = relevantActivities.map( (activity, i) => <Activity key={i} name={activity.name} address={activity.address} cost={activity.cost} notes={activity.notes} 
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
            <Typography variant="h5" color="primary" align="center"><strong>Activities:</strong></Typography>
          </Grid>
          <Grid container spacing={2}>
            { activities } 
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

export default connect(mapStateToProps)(ActivityList)
