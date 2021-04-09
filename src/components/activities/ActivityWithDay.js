import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Container, Grid, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import DaySelector from './DaySelector';

const useStyles = makeStyles({
  activity: {
    backgroundColor: fade("#22293D", 0.7),
    
  },
  flexChild: {
    width: 60,
    height: 70,
    margin: 10
  }
});

function ActivityWithDay({ activity, numOfDays, handleUpdate, day }) {
  console.log(activity)
  const classes = useStyles();


  return (
    <Grid item xs={12}>
      <Card container className={[classes.activity, "flex-container"].join(" ")} >
        
          <div className={[classes.flexChild, "flex-child"].join(" ")} >
          <Typography variant="h5" color="textSecondary">
            { activity.name }
          </Typography>
          <Typography variant="h6" color="textSecondary">
            ${ activity.cost }
          </Typography>
          </div>
          <div className={[classes.flexChild, "flex-child"].join(" ")}>
          <DaySelector numOfDays={numOfDays} activity={activity} handleUpdate={handleUpdate} day={day} />
          </div>
        
      </Card>
    </Grid>  
  )
}

export default ActivityWithDay
