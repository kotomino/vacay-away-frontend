import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import VacationDay from './VacationDay';


class VacationSchedule extends Component {

  render() {
    const { numOfDays, activities, vacation, handleUpdate } = this.props;

    /* Create daysArray with num of days in trip equaling indices and map over to create <VacationDay> containers */
    const daysArray = []

    for (let i = 0; i < numOfDays; i++) {
       daysArray.push(`Day ${i + 1}`);
    }
   
    const days = daysArray.map((day, i) => <VacationDay key={i} numOfDays={numOfDays} day={day} activities={activities} vacation={vacation} handleUpdate={handleUpdate} />)

    return (
      <Grid container spacing={2} className="slider">
        { days }
      </Grid>
    )
  }
}

export default VacationSchedule
