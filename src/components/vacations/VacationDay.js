import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import ActivityWithDay from '../activities/ActivityWithDay';

const useStyles = makeStyles({
  dayPlanner: {
    backgroundColor: fade("#F0FFFF", 0.4),
    height: 340,
  },
});

function VacationDay({ day, activities, vacation, numOfDays, handleUpdate }) {
  
  const activitiesForDay = activities.filter(activity => activity.day === day && activity.vacation.id === vacation.id )

  console.log(day, activitiesForDay)

  const displayActivities = activitiesForDay.map(activity => <ActivityWithDay day={ day } numOfDays={numOfDays} activity={activity} vacation={vacation} handleUpdate={handleUpdate} />);

  const classes = useStyles();
  
    return (
      <Grid item xs={4} sm={4} spacing={1}>
        <Typography variant="h5" color="textPrimary"><center><strong>{ day }</strong></center></Typography>
        <Card container className={[classes.dayPlanner, "slide"].join(" ")} elevation={5}>
          <CardContent >
            <Grid container spacing={1}>
            { displayActivities }
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }

export default VacationDay
