import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import DaySelector from './DaySelector';

const useStyles = makeStyles({
  activity: {
    backgroundColor: fade("#F0FFFF", 0.4),
    height: 150
  },
});

function ActivityWithDay({ activity, numOfDays, handleUpdate }) {
  console.log(activity)
  const classes = useStyles();

  return (
    <Card container className={classes.activity} >
      <CardContent>
        <Typography>
          { activity.name }< br/>
          ${ activity.cost }
        </Typography>
        <DaySelector numOfDays={numOfDays} activity={activity} handleUpdate={handleUpdate}/>
      </CardContent>
    </Card>
      
  )
}

export default ActivityWithDay
