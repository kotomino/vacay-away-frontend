import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  dayPlanner: {
    backgroundColor: fade("#F0FFFF", 0.4),
    height: 275
  },
});

function VacationDay({ day }) {

  const classes = useStyles();
  
    return (
      <Grid item xs={6} sm={6} >
        <Typography variant="h5" color="textSecondary"><center><strong>{ day }</strong></center></Typography>
        <Card container className={[classes.dayPlanner, "slide"].join(" ")} elevation={5} />
      </Grid>
    )
  }

export default VacationDay
