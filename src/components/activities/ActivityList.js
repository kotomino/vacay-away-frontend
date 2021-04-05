import React, { Component } from 'react'
import { connect } from 'react-redux';
import Activity from './Activity';

class ActivityList extends Component {
  
  render() {
    
    const activities = this.props.activities.activities.map( (activity, i) => <Activity key={i} name={activity.name} address={activity.address} cost={activity.cost} notes={activity.notes} 
    mondayOpen={activity.monday_open} mondayClose={activity.monday_close} 
    tuesdayOpen={activity.tuesday_open} tuesdayClose={activity.tuesday_close} 
    wednesdayOpen={activity.wednesday_open} wednesdayClose={activity.wednesday_close}  
    thursdayOpen={activity.thursday_open} thursdayClose={activity.thursday_close}  
    fridayOpen={activity.friday_open} fridayClose={activity.friday_close}  
    saturdayOpen={activity.saturday_open} saturdayClose={activity.saturday_close}  
    sundayOpen={activity.sunday_open} sundayClose={activity.sunday_close} />)

    return (
      <div>
        <h2>Available Activities:</h2>
        { activities } 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  }
}

export default connect(mapStateToProps)(ActivityList)
